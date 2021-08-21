const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  try {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2img/', { text: teks }))
    res = await url.json()
    stick = res.image
    let stiker = await sticker(null, stick, global.packname, global.author)
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply('Falha na conversão')
    throw false
  }
}
handler.help = ['ts2 (texto)']
handler.tags = ['sticker']
handler.command = /^(ts2)$/i
handler.limit = true

handler.group = true
//MadeByAnshul
module.exports = handler