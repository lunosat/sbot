let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let isGroupLink = linkRegex.exec(m.text)
  
  if (chat.antiLink && isGroupLink) {
    if(m.sender.isAdmin === true){
      m.reply('TRUE')
      return
    }
    if(m.sender.isAdmin === false){
      m.reply('FALSE')
      return
    }
    m.reply('ANTILINK ON: É GRUPO')
  }
  return true
}

module.exports = handler
