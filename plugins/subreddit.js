let fetch = require("node-fetch")
let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  chat = global.db.data.chats[m.chat]
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/' + encodeURI(text || ''), {}))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Midia nao encontrada!'
  if (json.nsfw){
    if(chat.nsfw === false){
      const buttons = [
        {buttonId: '.nsfw', buttonText: {displayText: 'Ativar modo NSFW'}, type: 1},
        {buttonId: '.what nsfw', buttonText: {displayText: 'O que é NSFW?'}, type: 1}
    ]
    const buttonMessage = {
        contentText: 'Este comando retornou um conteúdo adulto, para prosseguir ative o modo *NSFW* para este grupo.',
        footerText: 'Sapphire Network', 
        buttons: buttons,
        headerType: 1
    }
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
    return
    }
  } //throw 'Conteudo bloqueado'
  await conn.sendFile(m.chat, json.url, text, json.title, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['subreddit (pesquisa)']
handler.tags = ['internet', 'adult']
handler.command = /^(sr|subreddit)$/i

module.exports = handler
