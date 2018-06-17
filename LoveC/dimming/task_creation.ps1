$User = New-ScheduledTaskPrincipal -UserId riddl -LogonType Password
$Act = New-ScheduledTaskAction -Execute "C:\Users\riddl\Documents\Nodejs\AngelHack2018\LoveC\dimming\dimming_hue.sh1"
$Time = New-ScheduledTaskTrigger -Once -At (Get-Date) -RepetitionDuration "00:15:00" -RepetitionInterval "00:02:02"
$settings = New-ScheduledTaskSettingsSet
$settings.DisallowStartIfOnBatteries = 0
$Task = New-ScheduledTask -Trigger $Time -Principal $User -Action $Act -Setting $settings
Register-ScheduledTask -InputObject $Task -TaskName "startUp" -TaskPath \ -User riddl
Start-ScheduledTask startUp