let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*nenhuma votação ativa neste grupo!*_\n\n*${usedPrefix}votacao* - para iniciar uma votação`
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Kamu sudah vote!'
    if (/p/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/n/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`Voto computado!\n\n*${usedPrefix}vervotos* - para verificar votações`)
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(`
*「 Votos 」*

*Tema:* ${reason}

*Votos positivos*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*Votos negativos*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}

*${usedPrefix}pvotacao* - encerrar votação

`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['pvoto', 'nvoto']
handler.tags = ['vote']
handler.command = /^(p|n)voto$/i
handler.group = true
module.exports = handler
