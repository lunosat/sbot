module.exports = Object.assign(m => global.db.data.sticker ? m.reply(`
*LIST HASH*
Info: hash bloqueado

\`\`\`
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
\`\`\`
`.trim(), null, {
    contextInfo: {
        mentionedJid: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], [])
    }
}) : m.reply('Nothing 🤷🏻‍♂️'), {
    help: ['cmd'].map(v => 'list' + v + ' (texto)'),
    tags: ['database'],
    command: ['listcmd']
})
