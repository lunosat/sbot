module.exports = Object.assign(async function handler(m, { text }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `Sem hash`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'Você não tem permissão para excluir este comando de sticker'
    delete sticker[hash]
    m.reply(`Done!`)
}, {
    help: ['cmd'].map(v => 'del' + v + ' (texto)'),
    tags: ['database'],
    command: ['delcmd']
})