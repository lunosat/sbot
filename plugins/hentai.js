let handler = async (m, {conn, text, usedPrefix}) => {
  if(!text) throw `*Uso:* ${usedPrefix}hentai (categoria)\n*Exemplo:* ${usedPrefix}hentai anal\n\n*Categorias:*\n_Anal_\nTrap`
  if(text = 'anal'){
    conn.reply(m.chat, 'Hentai anal', m)
  }
}
handler.command = /^hentai$/i

module.exports = handler