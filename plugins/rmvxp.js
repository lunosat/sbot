let handler = async (m, { conn, text, args }) => {
    number = args[0] + '@s.whatsapp.net'
    let users = global.db.data.users[number]
    await m.reply(number)
    xp = args[1]
    let xex = parseInt(xp)
    users.exp -= xex
    m.reply(users.name)
    m.reply(xp)
    
}
handler.help = ['addxp']
handler.tags = ['owner']
handler.command = /^rmxp$/i
handler.rowner = true

module.exports = handler
