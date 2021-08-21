let limit = 30
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Qual a URL?'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Título:* ${title}
*Tamanho:* ${filesizeF}
*${isLimit ? 'Usado ': ''}Link:* ${dl_link}
`.trim(), m)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
*Título:* ${title}
*Tamanho:* ${filesizeF}
`.trim(), m, null, {
  asDocument: chat.useDocument
})
}
handler.help = ['mp3','a'].map(v => 'yt' + v + ` (URL) [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

