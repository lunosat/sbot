let { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let fs = require('fs')

const buttons = [
{buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1},
{buttonId: '.limit', buttonText: {displayText: 'LIMIT'}, type: 1},
]

const buttonMessage = {
contentText: "Ada yang bisa dibantu? \nTekan MENU",
footerText: 'test doang',
buttons: buttons,
headerType: 1
}

let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, {quoted : m} )
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