const { MessageType } = require('@adiwajshing/baileys')
async function handler(m, { conn, text, args }) {
    
    await conn.toggleDisappearingMessages(
        m.chat, 
        10// this is 1 week in seconds -- how long you want messages to appear for
    ) 
    // will automatically send as a disappearing message
    //await conn.sendMessage(m.chat, 'Hello poof!', MessageType.text)
    //turn off disappearing messages
    //await conn.toggleDisappearingMessages(m.chat, 0)
  
}
handler.command = ['somi']
  
module.exports = handler
  