Add-Type -AssemblyName System.Drawing
$file = Resolve-Path "public\logo.png"
$src = [System.Drawing.Bitmap]::FromFile($file)

$minX = $src.Width
$maxX = 0
$minY = $src.Height
$maxY = 0

for ($y = 0; $y -lt $src.Height; $y += 2) {
    for ($x = 0; $x -lt $src.Width; $x += 2) {
        $c = $src.GetPixel($x, $y)
        # Check if NOT white (threshold < 245 in any channel)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Actual graphic bounds: X=[$minX, $maxX] Y=[$minY, $maxY], Width=$($maxX - $minX), Height=$($maxY - $minY)"
$src.Dispose()
