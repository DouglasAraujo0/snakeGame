#!/bin/bash

projeto="/opt/dev/workspace/games/snakeGame"
nginx="/var/www/html"

if [ -d "$projeto" ] && [ -d "$nginx" ]; then
  for file in "$projeto"/*; do
    if [ "$(basename "$file")" != "script.sh" ]; then
      cp -r "$file" "$nginx"/
    fi
  done
  echo "Arquivos copiados de $projeto para $nginx"
else
  echo "Verifique se as pastas de origem e destino existem."
fi
só precisa colocar o nome da pasta do seu projeto e ver se a versão do nginx é a mesma
ai dentro do projeto, no vscode, é só criar um arquivo com o nome "script.sh"
e pra rodar o script, no terminal, você escreve bash script.sh