let axios = require('axios')
const googleTTS = require('google-tts-api')
let { MessageType}  = require('@adiwajshing/baileys')
const { text } = require('cheerio/lib/static')
let handler = m => m
handler.before = async function (m) {
    chat = global.db.data.chats[m.chat]
    if(chat.vsimi === false) return
    if (!m.quoted) return
    let {fromMe, id, isBaileys } = m.quoted
    if (!fromMe) return
    if (!isBaileys) return
    let say = m.text
    try{
        axios.get(`https://api.simsimi.net/v1/?text=${encodeURIComponent(say)}&lang=pt`).then(res => {
            //m.reply(res.data.success)
            let text = res.data.success
            //text.toString();
            let url = googleTTS.getAudioUrl(`${text}`, {
                lang: 'pt',
                slow: false,
                host: 'https://translate.google.com',
                //conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
            })
            conn.sendFile(m.chat, url, 'tts.opus', null, m, true)
        })
    } catch(err) {
        console.log(err)
    }

}
module.exports = handler


/*const googleTTS = require('google-tts-api')
async function handler(m, { conn, text, args }) {
    let url = googleTTS.getAudioUrl(text, {
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
    })
    m.reply(url)
    
  }
  
  handler.command = ['fale']
  
  module.exports = handler*/
  