const axios = require('axios')
const deepai = require('deepai')


let handler = m => m

handler.before = async function (m, { isAdmin, isBotAdmin }) {
    deepai.setApiKey('60be4276-b0fb-4a74-9a34-1d0f3ada9cc1')
    if (m.isBaileys && m.fromMe) return true
    let chat = global.db.data.chats[m.chat]
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) return
        //m.reply('Conteúdo recebido, verificando...')
        let result = await deepai.callStandardApi("content-moderation", {
            image: img
        });
        str = `${result.output.nsfw_score}`
        var prob = str.substring(0,4);
        //m.reply('Probabilidade de conteúdo adulto: ' + prob + '\n\nNify Tech agradece sua colaboração!')  
    } else return 
  return true
}

module.exports = handler

