// Thanks to TOXIC-DEVIL
// https://github.com/TOXIC-DEVIL

let handler = async (m, { conn, args }) => {
    if (!args || !args[0] || args.length === 0) throw 'Digite o número que deseja analisar.'
    if (args[0].startsWith('0')) throw 'Use o código do país.'
    let user = await conn.isOnWhatsApp(args[0])
    let exists = user && user.exists ? true : false
    if (exists) {
        let sameGroup = [], isInDatabase = false
        let chat = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only)
        for (let gc of chat) {
            let participants = gc && gc.metadata && gc.metadata.participants ? gc.metadata.participants : []
            if (participants.some(v => v.jid === user.jid)) sameGroup.push(gc.jid)
        }
        if (user.jid in global.db.data.users) isInDatabase = true
        let str = ` 
*Nome:* ${conn.getName(user.jid)}
*Número:* ${splitM(user.jid)}
*Menção:* ${toM(user.jid)}
*Url:* wa.me/${splitM(user.jid)}
*ID:* ${user.jid}
*Whatsapp Bussines:* ${user.isBusiness ? 'Sim' : 'Não'}
*Database:* ${isInDatabase ? 'Sim' : 'Não'}
*Grupos em comum com o bot:* ${sameGroup.length} *Grupos*
`.trim()
        m.reply(str, m.chat, { 
            contextInfo: { 
                mentionedJid: conn.parseMention(str)
            }
        })
    } else throw 'Usuário não encontrado.'
}
    
handler.help = ['scan'].map(v => v + ' (número)')
handler.tags = ['tools']
handler.command = /^scan$/i

module.exports = handler

function splitM(jid) {
    return jid.split('@')[0]
}

function toM(jid) {
    return '@' + splitM(jid)
}