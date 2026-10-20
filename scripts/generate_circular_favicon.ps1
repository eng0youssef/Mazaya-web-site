Add-Type -AssemblyName System.Drawing

$file = Resolve-Path "public\logo-clean.png"
$src = [System.Drawing.Bitmap]::FromFile($file)

$size = 256
$dest = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($dest)

$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$g.Clear([System.Drawing.Color]::Transparent)

# Clean white circular base
$inset = 4
$circleRect = New-Object System.Drawing.Rectangle($inset, $inset, ($size - $inset * 2), ($size - $inset * 2))
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.FillEllipse($whiteBrush, $circleRect)

# Outer Gold Rim (#F2C12E)
$goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 242, 193, 46), 12)
$g.DrawEllipse($goldPen, $circleRect)

# Inner Navy Rim (#0A507A)
$navyInset = 10
$navyRect = New-Object System.Drawing.Rectangle($navyInset, $navyInset, ($size - $navyInset * 2), ($size - $navyInset * 2))
$navyPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(200, 10, 80, 122), 3)
$g.DrawEllipse($navyPen, $navyRect)

# Draw clean logo filling 85% of the circle
$pad = 20
$targetW = $size - ($pad * 2)
$targetH = $size - ($pad * 2)

$ratio = [Math]::Min($targetW / $src.Width, $targetH / $src.Height)
$finalW = [int]($src.Width * $ratio)
$finalH = [int]($src.Height * $ratio)

$destX = [int](($size - $finalW) / 2)
$destY = [int](($size - $finalH) / 2)

$srcRect = New-Object System.Drawing.Rectangle(0, 0, $src.Width, $src.Height)
$destRect = New-Object System.Drawing.Rectangle($destX, $destY, $finalW, $finalH)

$g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()
$src.Dispose()

# Save
$dest.Save("public\favicon-circle.png", [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Save("public\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Save("public\apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Save("src\app\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Save("public\favicon.ico", [System.Drawing.Imaging.ImageFormat]::Icon)

$dest.Dispose()
Write-Host "Circular favicon re-generated with clean transparent logo!"
