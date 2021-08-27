let { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, {conn}) => {
    audio = fs.readFileSync('./src/antilink.mp3'); //audio = '../src/antilink.mp3'
    //conn.sendFile(m.chat, audio, 'bye.mp3', null, m, true)
    conn.sendMessage(m.chat, audio, MessageType.audio, { mimetype: 'audio/mp4', ptt: true })

    function Func(){
        m.reply('oi')
    }
    setTimeout(Func, 4000)
}
handler.command = ['aa']

module.exports = handler