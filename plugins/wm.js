const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Marque o sticker'
    let img = await m.quoted.download()
    stiker = await sticker(img, false, packname || '', author || '')
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Falha na conversão'
  }
}
handler.help = ['rs (pacote)|(criador)']
handler.tags = ['sticker']
handler.command = /^rs$/i
handler.group = true

module.exports = handler
