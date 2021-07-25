let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Use *${usedPrefix}list${which}* para ver a lista de mensagens`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' não foi encontrado`
    delete msgs[text]
    m.reply(`Mensagem excluída com sucesso da base de dados, tag: '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' (texto)')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|sticker)$/

module.exports = handler