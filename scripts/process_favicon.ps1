Add-Type -AssemblyName System.Drawing

$srcPath = "public\logo.png"
$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcPath))

# Find non-transparent bounds
$minX = $src.Width
$maxX = 0
$minY = $src.Height
$maxY = 0

for ($y = 0; $y -lt $src.Height; $y += 2) {
    for ($x = 0; $x -lt $src.Width; $x += 2) {
        $c = $src.GetPixel($x, $y)
        if ($c.A -gt 25) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Bounds: X=[$minX, $maxX] Y=[$minY, $maxY], Width=$($maxX - $minX), Height=$($maxY - $minY)"

# Create a high-res circular canvas (256x256)
$size = 256
$dest = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($dest)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Clear with transparent
$g.Clear([System.Drawing.Color]::Transparent)

# Background circle options:
# Let's draw an elegant circular base:
# Dark Navy circle background (#0A507A) or White circle with subtle Gold rim
# Let's look at the user request: "لا صغير جدا ومش واضح وكمان عاوزين نعمله مدور"
# In browser tabs (which are light blue/grey as seen in screenshot), a solid deep-navy or white circular badge makes the gold coins & blue arrow pop prominently!
# Let's make an elegant circle with Navy (#0A507A) background and a refined Gold border (#F2C12E), or White background with crisp border.
# Let's create both or see how the logo looks inside.
# If the logo has navy elements, putting it on a clean crisp White circle with a Gold (#F2C12E) and Navy (#0A507A) double ring makes all colors (navy arrow, gold coins) 100% visible on both dark and light browser tabs!
# Or let's fill the circle with White:
$circleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.FillEllipse($circleBrush, 4, 4, ($size - 8), ($size - 8))

# Outer gold ring:
$goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 242, 193, 46), 6)
$g.DrawEllipse($goldPen, 4, 4, ($size - 8), ($size - 8))

# Subtle inner navy accent border:
$navyPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(40, 10, 80, 122), 2)
$g.DrawEllipse($navyPen, 8, 8, ($size - 16), ($size - 16))

# Crop and draw the logo tightly inside the circle so it fills ~80% of the circle (large and clear!)
$cropW = $maxX - $minX
$cropH = $maxY - $minY
$srcRect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)

# Destination rect inside circle (padded by 28px)
$pad = 28
$destW = $size - ($pad * 2)
$destH = $size - ($pad * 2)

# Keep aspect ratio
$ratio = [Math]::Min($destW / $cropW, $destH / $cropH)
$finalW = [int]($cropW * $ratio)
$finalH = [int]($cropH * $ratio)
$destX = [int](($size - $finalW) / 2)
$destY = [int](($size - $finalH) / 2)

$destRect = New-Object System.Drawing.Rectangle($destX, $destY, $finalW, $finalH)
$g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()
$src.Dispose()

# Save as public/favicon-round.png, public/favicon.png, public/favicon.ico, src/app/icon.png
$dest.Save("public\favicon-round.png", [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Save("public\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Save("src\app\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Also create multiple icon sizes for Windows/browser:
$dest.Save("public\favicon.ico", [System.Drawing.Imaging.ImageFormat]::Icon)

$dest.Dispose()
Write-Host "Favicon generated successfully!"
