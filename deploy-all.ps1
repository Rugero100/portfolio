# One-click deploy: GitHub + Vercel
# Run in PowerShell: .\deploy-all.ps1

$ErrorActionPreference = "Stop"
$RepoName = "portfolio"
$GitHubUser = "Rugero100"

Write-Host "`n=== Rugero Bonheur Portfolio Deploy ===`n" -ForegroundColor Cyan

# 1. Ensure we're in the project folder
Set-Location $PSScriptRoot

# 2. GitHub CLI
$gh = Get-Command gh -ErrorAction SilentlyContinue
if (-not $gh) {
    Write-Host "Installing GitHub CLI..." -ForegroundColor Yellow
    winget install --id GitHub.cli -e --accept-source-agreements --accept-package-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
}

# 3. GitHub login (opens browser if needed)
Write-Host "`nStep 1: GitHub login (browser may open)..." -ForegroundColor Green
gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
    gh auth login -w -p https -h github.com
}

# 4. Create repo and push
Write-Host "`nStep 2: Creating GitHub repo and pushing code..." -ForegroundColor Green
$remoteExists = git remote get-url origin 2>$null
if (-not $remoteExists) {
    gh repo create "$GitHubUser/$RepoName" --public --source=. --remote=origin --push
} else {
    git add -A
    git diff --cached --quiet 2>$null
    if ($LASTEXITCODE -ne 0) { git commit -m "Update portfolio" }
    git push -u origin main
}

Write-Host "`nGitHub: https://github.com/$GitHubUser/$RepoName" -ForegroundColor Cyan

# 5. Vercel deploy
Write-Host "`nStep 3: Deploying to Vercel (browser may open)..." -ForegroundColor Green
npx vercel --prod --yes

Write-Host "`n=== Done! Check the URL above. ===`n" -ForegroundColor Cyan
Write-Host "Tip: Add EmailJS env vars in Vercel Dashboard -> Settings -> Environment Variables`n"
