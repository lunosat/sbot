let { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw false 
    audio = fs.readFileSync('./src/antilink.mp3'); 
    conn.sendMessage(m.chat, audio, MessageType.audio, { mimetype: 'audio/mp4', ptt: true })
    if (global.opts['restrict']) {
      if (isBotAdmin) this.groupRemove(m.chat, [m.sender])
    }
    
  }
  return true
}

module.exports = handler

