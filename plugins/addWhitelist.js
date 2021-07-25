let handler = async (m, { usedPrefix, command, text, args }) => {
    if (!args || !['add', 'remove'].includes(args[0].toLowerCase())) throw `
*Modo de uso:* ${usedPrefix + command} <add|remove> número,número,...,número
*Exemplo:*
${usedPrefix + command} add 55119000000, 5521900000000
${usedPrefix + command} remove 55119000000, 5521900000000
`.trim()
    let type = args[0].toLowerCase() === 'add' ? true : false
    let teks = text.replace(args[0], '').trim()
    let users = teks.split(',').map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    for (let who of users) {
        let user = global.db.data.users[who]
        if (!user) user = global.db.data.users[who] = {}
        user.whitelist = type
    }
    m.reply(`Pronto ${type ? 'add' : 'remove'} whitelist ${users.length} usuário(s)`)
}
handler.help = ['whitelist'].map(v => v + ' número, número')
handler.tags = ['owner']
handler.command = ['whitelist']
handler.owner = true

module.exports = handler
