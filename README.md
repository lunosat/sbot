# s-bot

Whatsapp Bot

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/AkirahX/sbot)

## PARA TERMUX/UBUNTU/SSH

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
apt install imagemagick -y
git clone https://github.com/AkirahX/sbot
cd sbot
npm install
npm update
```

---------

## PARA WINDOWS/VPS/RDP

* Download And Install Git [`Click aqui`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click aqui`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click aqui`](https://ffmpeg.org/download.html) (**Não se esqueça de adicionar FFmpeg às variáveis de ambiente PATH**)
* Download And Install ImageMagick [`Click aqui`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/AkirahX/sbot
cd sbot
npm install
npm update
```

---------

## Iniciando

```bash
node .
```

---------

## Argumentos `node . [--options] [<session name>]`

### `--self`

Ativar modo próprio (ignora outro)

### `--pconly`

Bot disponível somente para privado

### `--gconly`

Bot disponível somente para grupo

### `--swonly`

Stts

### `--prefix <prefixes>`

* `prefixes` definit prefixos

### `--server`

Usado para [heroku](https://heroku.com/) ou escaneie através do site

### `--db <json-server-url>`

Use um banco de dados externo em vez de um banco de dados local
Exemplo `https://json-server.akirahx.repl.co`
Code: `https://replit.com/@AkirahX/json-server`

`node . --db 'https://json-server.akirahx.repl.co'`

O servidor deve ter como esta especificação

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

Se o QR code pequeno não for compatível

### `--restrict`

Ative os plugins restritos (seu número pode ser banido se utilizar da forma erradaa)

* Grupos `add, kick`

### `--img`

Inspeção de imagens no terminal

### `--autoread`

Ler mensagens automaticamente

### `--nyimak`

Sem funções, apenas a base de dados contínua funcionando

### `--test`

**Development** tests

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

Deixo créditos a @norutomo pela inspiração e ajuda com muita coisa.
