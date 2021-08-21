let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Ops...'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['megumin']
handler.tags = ['internet']
handler.command = /^(megumin)$/i

handler.group = true

module.exports = handler
