let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*Nenhuma votação ativa neste grupo!*_\n\n*${usedPrefix}votacao* - para iniciar uma votação`

    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    let votos = `
*「 Votos 」*

*Tema:* ${reason}

*Positivos*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*Negativos*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}
`
    const buttons = [
        {buttonId: '.pvotacao', buttonText: {displayText: 'Encerrar votação'}, type: 1}
    ]
    const buttonMessage = {
        contentText: votos.trim,
        footerText: 'Sapphire Network',
        buttons: buttons,
        headerType: 1

    }
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
}
handler.help = ['vervotos']
handler.tags = ['vote']
handler.command = /^vervotos$/i
handler.group = true
module.exports = handler
