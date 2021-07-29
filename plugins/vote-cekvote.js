let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*nenhuma votação ativa neste grupo!*_\n\n*${usedPrefix}votacao* - para iniciar uma votação`

    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(`
*「 Votos 」*

*Tema:* ${reason}

*Positivos*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*Negativos*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}

*${usedPrefix}pvotacao* - para encerrar a votação

`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['vervotos']
handler.tags = ['vote']
handler.command = /^vervotos$/i
handler.group = true
module.exports = handler
