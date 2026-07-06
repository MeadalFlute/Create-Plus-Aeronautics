# CPA:RE 同步脚本
# 将仓库中的 kubejs 和 ftbquests 同步到游戏目录

$SOURCE = "D:\Program\GameProject\Create plus aeronautics"
$TARGET = "D:\Games\Minecraft\Java\_minecraft\versions\CPA：RE"

Write-Host "≡ CPA:RE Sync ≡" -ForegroundColor Cyan

# 同步 kubejs（排除缓存垃圾）
Write-Host "[1/2] kubejs..." -ForegroundColor Yellow
robocopy "$SOURCE\kubejs" "$TARGET\kubejs" /MIR /XD "小试炼室" /XF "*.下载" "*.module.css" "*·*Wiki*" /NJH /NJS /NDL /NP

# 同步 ftbquests
Write-Host "[2/2] config/ftbquests..." -ForegroundColor Yellow
robocopy "$SOURCE\config\ftbquests" "$TARGET\config\ftbquests" /MIR /NJH /NJS /NDL /NP

Write-Host "Done! Ready to launch." -ForegroundColor Green
