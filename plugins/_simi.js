let axios = require('axios')
let { MessageType}  = require('@adiwajshing/baileys')
let handler = m => m
handler.before = async function (m) {
    chat = global.db.data.chats[m.chat]
    if(chat.simi === false) return
    let say = m.text
    try{
        axios.get(`https://api.simsimi.net/v1/?text=${say}&lang=pt`).then(res => {
            //conn.sendMessage(m.chat, res.result, MessageType.text)
            m.reply(res.data.success)
        })
    } catch(err) {
        console.log(err)
    }

}
module.exports = handler