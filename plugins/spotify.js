// Made By github.com/TOXIC-DEVIL
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Qual o nome da música?`
  let res = await fetch(global.API('zeks', '/api/spotify', { q: text }, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.data[0]) throw json
  let { title, artists, album, thumb, url, preview_mp3 } = json.data[0]
let spotifyinfo = `✨️ *Título:* ${title}
🗣️ *Artista:* ${artists}
🎆️ *Album:* ${album}
🌐️ *URL*: ${url}
💚️ *URL direta:* ${preview_mp3}`

  await conn.sendFile(m.chat, thumb, '', spotifyinfo, m)
  await conn.sendFile(m.chat, preview_mp3, 'spotify.mp3', spotifyinfo, m)
}
handler.help = ['spotify (musica)']
handler.tags = ['internet']
handler.command = /^(spotify|music)$/i
module.exports = handler
