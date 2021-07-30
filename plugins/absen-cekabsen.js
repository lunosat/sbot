let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Não há ausências neste grupo!*_\n\n*${usedPrefix}causencia* - para criar uma sala`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
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
handler.help = ['VerAusentes']
handler.tags = ['absen']
handler.command = /^verausentes$/i
handler.group = true
module.exports = handler