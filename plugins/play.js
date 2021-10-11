let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const canvacord = require("canvacord");
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'O que deseja?'
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio não encontrado'
  let isVideo = /2$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await (isVideo ? ytv : yta)(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Servidor ${server} apresentou um erro!${servers.length >= i + 1 ? '' : '\nTentando em outro servidor...'}`)
    }
  }
  if (yt === false) throw 'Todos servidores ocupados, tente novamente em breve'
  let { dl_link, thumb, title, filesize, filesizeF, timestamp } = yt
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize


  text = `
*Título:* ${title}
*Tamanho:* ${filesizeF}
*Url:* ${vid.url}
*${isLimit ? 'Use ': ''}Link:* ${dl_link}
*Servidor:* ${usedServer}
  `
  const card = new canvacord.Spotify()
    .setAuthor('Ni-Bot')
    .setAlbum('nifytech.com.br')
    .setStartTimestamp('00')
    .setEndTimestamp('10')
    .setImage(thumb)
    .setTitle(title);

  card.build()
    .then(buffer => {
        conn.sendFile(m.chat, buffer, 'play.png', text, m)
    });
  



  /*conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Título:* ${title}
*Tamanho:* ${filesizeF}
*Url:* ${vid.url}
*${isLimit ? 'Use ': ''}Link:* ${dl_link}
*Servidor:* ${usedServer}
`.trim(), m)*/














let _thumb = {}
try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
catch (e) { }
if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*Título:* ${title}
*Tamanho:* ${filesizeF}
*Url:* ${vid.url}
*Servidor:* ${usedServer}
`.trim(), m, false,  {
  ..._thumb,
  asDocument: chat.useDocument
})
}
handler.help = ['play', 'play2'].map(v => v + ' (pesquisa)')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false
handler.group = true

module.exports = handler

