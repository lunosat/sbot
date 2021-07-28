module.exports = Object.assign(async function handler(m, { command }) {
    if (!m.quoted) throw 'Marque a mensagem!'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw 'Hash não encontradi'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('Ok.')
}, {
    rowner: true,
    help: ['un', ''].map(v => v + 'lockcmd'),
    tags: ['database'],
    command: /^(un)?lockcmd$/i
})
