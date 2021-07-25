module.exports = Object.assign(async function handler(m, { conn, text }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw 'Hash não encontrado'
    let sticker = global.db.data.sticker[hash]
    if (sticker) return m.reply(`
*fileSha256:* ${hash}
*Texto:* ${sticker.text}
*Criação:* ${sticker.at}
*Bloqueado:* ${sticker.locked ? 'Sim' : 'Não'}
*Criador:* ${conn.getName(sticker.creator)}
*Criador num.:* ${splitM(sticker.creator)}
*Criador ID:* ${sticker.creator}


${sticker.mentionedJid.length > 0 ? `*Cmd mencionado:*

${sticker.mentionedJid.map((v, i) => `Não. *${i + 1}*:\n*Nome do mencionado:* ${conn.getName(v)}\n*Número do mencionado:* ${splitM(v)}\n*ID do mencionado:* ${v}`).join('\n\n')}` : ''} 
`.trim())
    else m.reply('Sticker não encontrado na base de dados')
}, {
    help: ['cmd'].map(v => 'info' + v + ' (texto)'),
    tags: ['database'],
    command: ['infocmd']
})

/**
 * split Jid
 * @param {String} jid 
 * @returns String
 */
function splitM(jid) {
    return jid.split('@')[0]
}