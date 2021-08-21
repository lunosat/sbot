let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    const buttons = [
        {buttonId: '.buy 5', buttonText: {displayText:'Comprar 5 (1.750 XP)'}, type: 1},
        {buttonId: '.buy 10', buttonText: {displayText:'Comprar 10 (3.500 XP)'}, type: 1},
        {buttonId: '.buy 20', buttonText: {displayText:'Comprar 20 (7.000 XP)'}, type: 1}
    ]
    const buttonMessage = {
        contentText: `${global.db.data.users[who].limit} Coins restantes.`,
        footerText: 'Sapphire Network',
        buttons: buttons,
        headerType: 1

    }
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
    //m.reply()
}
handler.help = ['coins (@user)']
handler.tags = ['xp']
handler.command = /^(coins)$/i

handler.group = true

module.exports = handler