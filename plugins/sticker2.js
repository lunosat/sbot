const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker2')
let handler  = async (m, { conn, args }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Foto/Video não encontrado'
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Falha na conversão'
  }
}
handler.help = ['f (legenda|marque)', 'f (url)']
handler.tags = ['sticker']
handler.command = /^f2(tic?ker)?(gif)?(wm)?$/i
handler.group = true

module.exports = handler
