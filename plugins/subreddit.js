let fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/' + encodeURI(text || ''), {}))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Midia nao encontrada!'
  if (json.nsfw) throw 'Conteudo bloqueado'
  await conn.sendFile(m.chat, json.url, text, json.title, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['subreddit (pesquisa)']
handler.tags = ['internet']
handler.command = /^(sr|subreddit)$/i

module.exports = handler
