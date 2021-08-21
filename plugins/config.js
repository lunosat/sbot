let { MessageType } = require ('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    chat = global.db.data.chats[m.chat]
    const rows = [
        {title: 'Modo NSFW', description: ' ', rowId: '.nsfw'}
    ]
    const sections = [{title: 'Configurações', rows: rows}]

    const button = {
        buttonText: 'Configurações',
        description: 'Altere as configurações de seu grupo a seguir, lembre-se que deve ser *administrador*.', 
        sections: sections,
        listType: 1
    }
    conn.sendMessage(m.chat, button, MessageType.listMessage)
}
handler.help = ['config', 'configuracoes']
handler.tags = ['main']
handler.command = ['config']

module.exports = handler