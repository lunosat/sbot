let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Qual manga?`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
let mangaingfo = `*Título:* ${title}
*Capítulos:* ${chapters}
*Volumes:* ${volumes}
*Score:* ${score}
*Sinopse:* ${synopsis}
*Link*: ${url}`
  conn.sendFile(m.chat, image_url, '', mangaingfo, m)
}
handler.help = ['manga (título)']
handler.tags = ['internet']
handler.command = /^(manga)$/i

handler.group = true

module.exports = handler
