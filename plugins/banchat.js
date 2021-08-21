let handler = async (m, { conn, participants }) => {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Ok!')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = true

module.exports = handler
