# Define as pastas de origem e destino
$folder = 'D:\Fatec\TG - Trabalho de Graduação\Aplicação\vizinhancasolidaria-backend\tmp\avatar' # substitua pelo seu caminho de pasta de origem
$destination = 'D:\Fatec\TG - Trabalho de Graduação\Aplicação\vizinhancasolidaria-frontend\public' # substitua pelo seu caminho de pasta de destino

# Cria o objeto FileSystemWatcher para monitorar a pasta de origem
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $folder
$watcher.Filter = "*.*"
$watcher.IncludeSubdirectories = $false
$watcher.EnableRaisingEvents = $true  

# Define a ação a ser tomada quando um arquivo é criado
$action = { 
    param($source, $eventArgs) 

    $name = $eventArgs.Name
    $changeType = $eventArgs.ChangeType
    $timeStamp = $eventArgs.TimeGenerated
    Write-Host "O arquivo '$name' foi $changeType em $timeStamp"

    # Copia o arquivo para a pasta de destino
    Copy-Item -Path (Join-Path $folder $name) -Destination $destination
}

# Registra o evento
Register-ObjectEvent $watcher "Created" -Action $action

# Mantém o script em execução até que seja parado manualmente
while ($true) {sleep 5}
