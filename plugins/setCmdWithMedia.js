module.exports = Object.assign(async function handler(m, { text }) {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!m.quoted) throw 'Marque a mensagem!'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash não encontrado'
    if (!text) throw `Faltou o texto`
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (sticker[hash] && sticker[hash].locked) throw 'Você não tem permissão para alterar este comando de sticker'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Pronto!`)
}, {
    help: ['cmd'].map(v => 'set' + v + ' (texto))'),
    tags: ['database'],
    command: ['setcmd']
})
