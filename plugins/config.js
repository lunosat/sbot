let { MessageType } = require ('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    chat = global.db.data.chats[m.chat]
    const rows = [
        {title: 'Modo NSFW', description: 'Ative ou desative o modo NSFW', rowId: '.nsfw'},
        {title: 'Simi', description: 'Ative ou desative o SimSimi', rowId: '.simi'},
        {title: 'Simi', description: 'Ative ou desative o Voice-SimSimi', rowId: '.vsimi'},
        {title: 'Ant-Pornografia', description: 'Ative ou desative o ant-porn', rowId: '.enable antiporn'},
        {title: 'Ant-Flood', description: 'Ative ou desative o anti-flood', rowId: '.enable antiflood'},

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
handler.help = ['config', 'c']
handler.tags = ['main']
handler.command = ['config', 'c']

module.exports = handler