const uploadImage = require('../lib/uploadImage')
const uploadFile = require('../lib/uploadFile')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
//api down always at night :/
let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw 'Qual o textot?'
  if (text.length > 8) return conn.reply(m.chat, '_Texto muito longo! Use no máximo 8 letras!_', m)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Marque a mensagem ou envie com o comando *${usedPrefix + command} ${text}* na legenda`
 try {
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Formato ${mime} não suportado`
  let img = await q.download()
  let url = await uploadImage(img).catch(e => uploadFile(img))
  let meme = global.API('http://zekais-api.herokuapp.com/', 'customtrigger', {text , image: url})
  let stiker = await sticker(null, meme, global.packname, global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('Erro || Cite a mensagem!')
   throw false
  }
}
handler.help = ['ctrigger (texto)']
handler.tags = ['sticker']
handler.command = /^(custom|c)trigger$/i
handler.limit = true
module.exports = handler