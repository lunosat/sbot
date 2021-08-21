let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) throw 'O que deseja?'
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'gimage', `
*── 「 Google Imagens 」 ──*

${text}
➸ *Largura*: ${width}
➸ *Altura*: ${height}
`.trim(), m)
}
handler.help = ['gimage (dados)', 'imagem (dados)']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|imagem)$/i

handler.group = true

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
