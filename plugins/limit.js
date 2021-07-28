let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`${global.db.data.users[who].limit} Coins restantes.`)
}
handler.help = ['coins (@user)']
handler.tags = ['xp']
handler.command = /^(coins)$/i
module.exports = handler