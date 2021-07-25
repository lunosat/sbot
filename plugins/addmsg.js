let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Marque a mensagem!'
    if (!text) throw `Use *${usedPrefix}list${which}* para verificar a lista de mensagens salvas`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' registrado em nosso banco de dados`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Mensagem adicionada com sucesso com a tag '${text}'
    
Acesse a mensagem com ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' (texto)')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/
handler.group = true

module.exports = handler