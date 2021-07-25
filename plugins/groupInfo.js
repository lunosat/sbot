let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*「 Informações do grupo 」*\n
*ID:* 
${groupMetadata.id}

*Nome:* 
${groupMetadata.subject}

*Descrição:* 
${groupMetadata.desc}

*Número de membros:*
${participants.length} Membros

*Dono do grupo:* 
@${m.chat.split`-`[0]}

*Administradores:*
${listAdmin}

*Configurações:*
${isBanned ? '✅' : '❌'} banido
${welcome ? '✅' : '❌'} Boas vindas
${detect ? '✅' : '❌'} Detect
${global.db.data.chats[m.chat].delete ? '❌' : '✅'} Anti Delete
${antiLink ? '✅' : '❌'} Anti Link

*Config. de mensagens:*
Boas vindas: ${sWelcome}
Despedidas: ${sBye}
Promoção: ${sPromote}
Despromoção: ${sDemote}
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['infogrupo']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gru?po|gc))$/i

handler.group = true

module.exports = handler