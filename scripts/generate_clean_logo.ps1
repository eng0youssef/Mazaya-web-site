Add-Type -AssemblyName System.Drawing

$file = Resolve-Path "public\logo.png"
$src = [System.Drawing.Bitmap]::FromFile($file)

# Exact detected bounds with 4px safety margin
$minX = [Math]::Max(0, 260)
$maxX = [Math]::Min($src.Width - 1, 656)
$minY = [Math]::Max(0, 216)
$maxY = [Math]::Min($src.Height - 1, 580)

$cropW = $maxX - $minX
$cropH = $maxY - $minY

$dest = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $c = $src.GetPixel($minX + $x, $minY + $y)
        
        # Calculate brightness / distance from pure white
        # If very close to white, make transparent
        $whiteness = [Math]::Min($c.R, [Math]::Min($c.G, $c.B))
        
        if ($whiteness -ge 250) {
            # Fully transparent
            $dest.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        }
        elseif ($whiteness -ge 235) {
            # Soft anti-aliased edge
            $alpha = [int](255 * (250 - $whiteness) / 15)
            $dest.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        }
        else {
            # Solid logo pixel
            $dest.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $c.R, $c.G, $c.B))
        }
    }
}

$src.Dispose()

# Save as public/logo-clean.png and public/logo-transparent.png
$dest.Save("public\logo-clean.png", [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Save("public\logo-transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)

$dest.Dispose()
Write-Host "Clean transparent cropped logo generated: $cropW x $cropH"
