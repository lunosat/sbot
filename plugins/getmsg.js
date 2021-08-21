let handler = async (m, { conn, command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Use *${usedPrefix}list${which}* para ver a lista de mensagens salvas`
    let msgs = global.db.data.msgs
    if (!(text in msgs)) throw `'${text}' não foi encontrado`
    let _m = conn.serializeM(JSON.parse(JSON.stringify(msgs[text]), (_, v) => {
        if (
            v !== null &&
            typeof v === 'object' &&
            'type' in v &&
            v.type === 'Buffer' &&
            'data' in v &&
            Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
    // m.reply(`[debug]\n${require('util').format(_m)}`)
    await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' (texto)')
handler.tags = ['database']
handler.command = /^get(vn|msg|video|audio|img|sticker)$/

handler.group = true

module.exports = handler