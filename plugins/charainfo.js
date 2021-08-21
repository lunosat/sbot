let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Diga-me o nome!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url } = json.results[0]
let charaingfo = `*Nome:* ${name}
*Nickname:* ${alternative_names}
*Link*: ${url}`
  conn.sendFile(m.chat, image_url, '', charaingfo, m)
}
handler.help = ['personagem (nome)']
handler.tags = ['internet']
handler.command = /^(chara|personagem)$/i
handler.group = true
module.exports = handler
