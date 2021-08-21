//made by Anshul
const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, text }) => {
    let effect = text.trim().toLowerCase()
  if (!effects.includes(effect)) throw `
*Uso:* ${usedPrefix}sm (efeito)
*Exemplo:* ${usedPrefix}sm jail

*Lista de efeitos:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Imagem não encontrada'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Formato ${mime} não suportado`
  let img = await q.download()
  let url = await uploadImage(img)
  let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
    avatar: url
  })
try {
    let stiker = await sticker(null, apiUrl, global.packname, global.author)
    await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply('Conversão para sticker má sucedida, enviando como imagem.')
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
  }
}

handler.help = ['sm (legenda|marque)']
handler.tags = ['sticker']
handler.command = /^(sm)$/i
handler.limit = true
handler.group = true
handler.register = true
module.exports = handler
