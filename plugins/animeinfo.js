let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Qual anime?`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
let animeingfo = `✨️ *Título:* ${title}
🎆️ *Episódios:* ${episodes}
➡️ *Lançamento:* ${start_date}
🔚 *Encerramento:* ${end_date}
💬 *Exibição:* ${type}
💌️ *Notas:* ${rated}
❤️ *Score:* ${score}
👥 *Membros:* ${members}
💚️ *Sínopse:* ${synopsis}
🌐️ *URL*: ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime (título)']
handler.tags = ['internet']
handler.command = /^(anime|animeinfo)$/i
handler.group = true

module.exports = handler
