let axios = require('axios')
let { MessageType}  = require('@adiwajshing/baileys')
let handler = m => m
handler.before = async function (m) {
    chat = global.db.data.chats[m.chat]
    if(chat.simi === false) return
    if (!m.quoted) return
    let {fromMe, id, isBaileys } = m.quoted
    if (!fromMe) return
    if (!isBaileys) return
    let say = m.text
    try{
        axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(say)}&lc=pt`).then(res => {
            m.reply(res.data.success)
        })
    } catch(err) {
        console.log(err)
    }

}
module.exports = handler
