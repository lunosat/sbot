let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let isGroupLink = linkRegex.exec(m.text)
  if(m.sender.isAdmin){
    m.reply('DEBUG: ADM mandou link')
    return
  }
  if (chat.antiLink && isGroupLink) {
    m.reply('DEBUG: não ademe')
  }
  return true
}

module.exports = handler
