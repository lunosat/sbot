let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Não há ausências neste grupo!*_\n\n*${usedPrefix}causencia* - para criar uma sala`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*Voce está ausênte!*'
    absen.push(m.sender)
    m.reply(`Pronto!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 Ausêntes 」*

Data: ${date}
${conn.absen[id][2]}

┌ *Pessoas ausêntes:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────
`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['ausente']
handler.tags = ['absen']
handler.command = /^(ausente|hadir)$/i
handler.group = true
module.exports = handler