import { NextRequest, NextResponse } from "next/server";

// Escape HTML entities to prevent Telegram parse errors with special characters (<, >, &, ", ')
function escapeHtml(text: string): string {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      companyName, 
      contactName, 
      phone, 
      activity, 
      address, 
      system, 
      branches, 
      notes 
    } = body;

    // Validate mandatory fields
    if (
      !companyName?.trim() || 
      !contactName?.trim() || 
      !phone?.trim() || 
      !activity?.trim() || 
      !address?.trim()
    ) {
      return NextResponse.json(
        { ok: false, error: "يرجى ملء جميع الحقول الإجبارية (اسم المنشأة، اسم المسؤول، النشاط، العنوان، ورقم الهاتف)" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const googleSheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    // Clean phone number and normalize Arabic numerals
    let cleanPhone = String(phone).trim().replace(/[\s\-\+]/g, "");
    cleanPhone = cleanPhone.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString());

    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { ok: false, error: "يرجى إدخال رقم موبايل صحيح" },
        { status: 400 }
      );
    }

    const waPhone = cleanPhone.startsWith("01") ? `2${cleanPhone}` : cleanPhone;
    const waText = `أهلاً بك أستاذ ${contactName}، معك فريق المبيعات من شركة مزايا للبرمجيات بخصوص طلب تجربة نظام (${system || "مزايا"}) لنشاط (${companyName} - ${activity})...`;
    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;

    // Format rich Telegram message with HTML formatting
    const telegramMessage = `🚨 <b>طلب تجربة جديد من موقع مزايا للبرمجيات</b>
━━━━━━━━━━━━━━━━━━
🏢 <b>اسم المنشأة:</b> ${escapeHtml(companyName)}
💼 <b>النشاط:</b> ${escapeHtml(activity)}
📍 <b>العنوان:</b> ${escapeHtml(address)}
👤 <b>اسم المسؤول:</b> ${escapeHtml(contactName)}
📱 <b>الموبايل:</b> <code>${escapeHtml(cleanPhone)}</code>
💻 <b>النظام المطلوب:</b> ${escapeHtml(system || "مزايا ماكس")}
🏪 <b>عدد الفروع:</b> ${escapeHtml(branches || "فرع واحد")}
📝 <b>ملاحظات:</b> ${escapeHtml(notes || "لا يوجد")}
━━━━━━━━━━━━━━━━━━
💬 <a href="${waUrl}">اضغط هنا لمراسلة العميل واتساب فوراً</a>`;

    let telegramSent = false;
    let sheetSent = false;

    // 1. Send to Telegram group
    if (botToken && chatId) {
      try {
        const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "💬 مراسلة العميل واتساب فوراً",
                    url: waUrl,
                  },
                ],
              ],
            },
          }),
        });
        if (tgRes.ok) {
          telegramSent = true;
        } else {
          console.error("Telegram API response error:", await tgRes.text());
        }
      } catch (tgErr) {
        console.error("Telegram delivery failed:", tgErr);
      }
    } else {
      console.warn("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing from environment variables.");
    }

    // 2. Send to Google Sheets Webhook
    if (googleSheetUrl) {
      try {
        const nowCairo = new Date().toLocaleString("ar-EG", { timeZone: "Africa/Cairo" });
        const sheetRes = await fetch(googleSheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            date: nowCairo,
            companyName: companyName.trim(),
            contactName: contactName.trim(),
            phone: cleanPhone,
            activity: activity.trim(),
            address: address.trim(),
            system: system || "مزايا ماكس",
            branches: branches || "فرع واحد",
            notes: notes?.trim() || "لا يوجد",
            // Arabic headers mapping matching the sheet columns exactly:
            "التاريخ والوقت": nowCairo,
            "اسم الشركة": companyName.trim(),
            "اسم المنشأة": companyName.trim(),
            "اسم العميل": contactName.trim(),
            "اسم المسؤول": contactName.trim(),
            "العنوان": address.trim(),
            "النشاط": activity.trim(),
            "رقم الموبايل": cleanPhone,
            "الموبايل": cleanPhone,
            "النظام المطلوب": system || "مزايا ماكس",
            "النظام": system || "مزايا ماكس",
            "عدد الفروع": branches || "فرع واحد",
            "الفروع": branches || "فرع واحد",
            "ملاحظات": notes?.trim() || "لا يوجد",
          }),
        });
        if (sheetRes.ok) {
          sheetSent = true;
        } else {
          console.error("Google Sheet webhook error:", await sheetRes.text());
        }
      } catch (sheetErr) {
        console.error("Google Sheets delivery failed:", sheetErr);
      }
    } else {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL is missing from environment variables.");
    }

    return NextResponse.json({ 
      ok: true, 
      message: "تم تسجيل وإرسال الطلب بنجاح",
      details: { telegramSent, sheetSent }
    });
  } catch (error) {
    console.error("Lead processing error:", error);
    return NextResponse.json(
      { ok: false, error: "تعذر معالجة الطلب في الوقت الحالي" },
      { status: 500 }
    );
  }
}
