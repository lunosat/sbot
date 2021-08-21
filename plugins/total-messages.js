let handler = async (m, { conn }) => {
    let id = m.chat
    let mCount = {}
    let totalM = 0
    await conn.loadAllMessages(id, m => {
        let user = m.key.fromMe ? conn.user.jid : m.participant ? m.participant : id.includes('g.us') ? '' : id
        if (!user) return
        if (user in mCount) mCount[user]++
        else mCount[user] = 1
        totalM++
    }, 1000)
    let sorted = Object.entries(mCount).sort((a, b) => b[1] - a[1])
    let pesan = sorted.map(v => `${v[0].replace(/(\d+)@.+/, '@$1')}: ${v[1]} mensagens`).join('\n')
    m.reply(`${totalM} _mensagens no total._\n\n${pesan}`, false, { contextInfo: { mentionedJid: sorted.map(v => v[0]) } })
}
handler.help = ['tmsgs']
handler.tags = ['group']

handler.command = /^tmsgs$/i
handler.limit = true
handler.group = true
handler.register = true
handler.admin = true

module.exports = handler