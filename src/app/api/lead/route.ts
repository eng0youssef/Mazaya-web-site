import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { companyName, contactName, phone, system, branches, notes } = body;

    // Validate mandatory fields
    if (!companyName || !contactName || !phone) {
      return NextResponse.json(
        { ok: false, error: "يرجى ملء جميع الحقول الإجبارية" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const googleSheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    // Clean phone number and prepare formatted WhatsApp link
    const cleanPhone = String(phone).replace(/[\s\-\+]/g, "");
    const waPhone = cleanPhone.startsWith("01") ? `2${cleanPhone}` : cleanPhone;

    const waText = `أهلاً بك أستاذ ${contactName}، معك فريق المبيعات من شركة مزايا للبرمجيات بخصوص طلب تجربة نظام (${system || "مزايا"}) لشركة (${companyName})...`;
    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;

    // Format rich Telegram message with HTML (prevents Markdown URL parenthesis breaking)
    const telegramMessage = `🚨 <b>طلب تجربة جديد من موقع مزايا للبرمجيات</b>
━━━━━━━━━━━━━━━━━━
🏢 <b>اسم الشركة:</b> ${companyName}
👤 <b>اسم العميل:</b> ${contactName}
📱 <b>الموبايل:</b> <code>${cleanPhone}</code>
💻 <b>النظام المطلوب:</b> ${system || "مزايا ماكس"}
🏪 <b>عدد الفروع:</b> ${branches || "فرع واحد"}
📝 <b>ملاحظات:</b> ${notes || "لا يوجد"}
━━━━━━━━━━━━━━━━━━
💬 <a href="${waUrl}">اضغط هنا لمراسلة العميل واتساب فوراً</a>`;

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
        if (!tgRes.ok) {
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
        const sheetRes = await fetch(googleSheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            companyName,
            contactName,
            phone: cleanPhone,
            system: system || "مزايا ماكس",
            branches: branches || "1",
            notes: notes || "لا يوجد",
          }),
        });
        if (!sheetRes.ok) {
          console.error("Google Sheet webhook error:", await sheetRes.text());
        }
      } catch (sheetErr) {
        console.error("Google Sheets delivery failed:", sheetErr);
      }
    } else {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL is missing from environment variables.");
    }

    return NextResponse.json({ ok: true, message: "تم تسجيل وإرسال الطلب بنجاح" });
  } catch (error) {
    console.error("Lead processing error:", error);
    return NextResponse.json(
      { ok: false, error: "تعذر معالجة الطلب في الوقت الحالي" },
      { status: 500 }
    );
  }
}
