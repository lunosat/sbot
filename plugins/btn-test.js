let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

    const buttons = [
        {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1},
        {buttonId: '.perfil', buttonText: {displayText: 'PERFIL'}, type: 1},
        {buttonId: '.hentai trap', buttonText: {displayText: 'H'}, type: 1},
    ]

    const buttonMessage = {
        contentText: "Olá, como posso melhorar seu dia hoje?",
        footerText: 's-bot 3.4',
        buttons: buttons,
        headerType: 1
    }
    let handler = async (m, { conn }) => {
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage )
}


handler.command = /^btn$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
