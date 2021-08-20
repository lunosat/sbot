let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

const rows = [
        {title: 'Itém 1', description: "Descrição 1", rowId:".perfil"},
        {title: 'Itém 2', description: "Descrição 2", rowId:".perfil"},
        {title: 'Itém 3', description: "Descrição 3", rowId:".perfil"},
        {title: 'Itém 4', description: "Descrição 4", rowId:".perfil"},
        {title: 'Itém 5', description: "Descrição 5", rowId:".perfil"}
    ]
   
    const sections = [{title: "Section 1", rows: rows}]
   
    const button = {
        buttonText: 'Click aqui!',
        description: "Isso é uma lista",
        sections: sections,
        listType: 1
   }
    let handler = async (m, { conn }) => {
    conn.sendMessage(m.chat, button, MessageType.listMessage)
}


handler.command = /^btn1$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler