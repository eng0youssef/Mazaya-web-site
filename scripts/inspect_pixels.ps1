Add-Type -AssemblyName System.Drawing
$file = Resolve-Path "public\logo.png"
$src = [System.Drawing.Bitmap]::FromFile($file)
$c0 = $src.GetPixel(0, 0)
$c10 = $src.GetPixel(10, 10)
$midX = [int]($src.Width / 2)
$midY = [int]($src.Height / 2)
$cmid = $src.GetPixel($midX, $midY)

Write-Host "Pixel (0,0): A=$($c0.A), R=$($c0.R), G=$($c0.G), B=$($c0.B)"
Write-Host "Pixel (10,10): A=$($c10.A), R=$($c10.R), G=$($c10.G), B=$($c10.B)"
Write-Host "Pixel center: A=$($cmid.A), R=$($cmid.R), G=$($cmid.G), B=$($cmid.B)"

$src.Dispose()
