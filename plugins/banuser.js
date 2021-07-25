let handler = async (m, { conn, text }) => {
    if (!text) throw 'Quem deseja banir?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Marque quem deseja banir'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `Usuário banido.`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
