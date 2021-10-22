const axios = require('axios')
const deepai = require('deepai')


let handler = m => m

handler.before = async function (m, { isAdmin, participants, isBotAdmin }) {
    deepai.setApiKey('60be4276-b0fb-4a74-9a34-1d0f3ada9cc1')
    if (m.isBaileys && m.fromMe) return true
    let chat = global.db.data.chats[m.chat]
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }
    const groupAdmins = getGroupAdmins(participants)
    let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')

    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) return
        console.log('Conteúdo recebido, verificando...')
        let result = await deepai.callStandardApi("content-moderation", {
            image: img
        });
        str = `${result.output.nsfw_score}`
        var prob = str.substring(2,4);
        if(prob >= 75 && prob <= 90){
            m.reply(`Conteúdo adulto detectado com *${prob}%* de certeza.\n\n${listAdmin}`)
        }
         
        if (chat.antiPorn && !isAdmin && !m.isBaileys && m.isGroup && prob >= 90) {
            
            //m.reply('Conteúdo adulto detectado com *' + prob + '%* de certeza, administradors notificados.')
            if (global.opts['restrict']) {
                if(!isBotAdmin){
                    m.reply(`Conteúdo adulto detectado com *${prob}%* de certeza, devo ser administradora para aplicar o banimento.\n\n${listAdmin}`)
                }
                if (isBotAdmin) {
                        m.reply('Conteúdo adulto detectado com *' + prob + '%* de certeza, aplicando banimento preventivo.')
                        this.groupRemove(m.chat, [m.sender])
                } 
            } else {
                m.reply(`Conteúdo adulto detectado com *${prob}%* de certeza.\n\n${listAdmin}`)
            }
        }
    } else return 
  return true
}

module.exports = handler

