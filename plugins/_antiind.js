let { MessageType}  = require('@adiwajshing/baileys')
let handler = m => m
handler.before = async function (m) {
    chat = global.db.data.chats[m.chat]
    if(chat.antiind){
        
    }

}
module.exports = handler