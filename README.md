# wabot-aq

Simple WhatsApp Bot

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

If small qr unicode doesn't support

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

<a href="https://api.xteam.xyz"><img src="https://i.ibb.co/7j0vtwz/xlogo.png" width="100" height="100"></a> | [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) | [![Ariffb](https://github.com/ariffb25.png?size=100)](https://github.com/ariffb25) | [![Ftwrr](https://github.com/Ftwrr.png?size=100)](https://github.com/Ftwrr) 
----|----|----|----
[XTEAM](https://api.xteam.xyz/) | [Nurutomo](https://github.com/Nurutomo) | [Ariffb](https://github.com/ariffb25) | [Ftwrr](https://github.com/Ftwrr)
Powered by XTEAM | Author / Creator | Most Active Contributor | 2nd Most Active Contributor


NOTE: This project will not maintained after `27 June 2021`, that means no update. Feel free to anyone to continue this project :)
