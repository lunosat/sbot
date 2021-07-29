
let handler = async(m, { conn, text }) => {
    if (!text) throw 'Descreva a denuncia ou bug.'
    if (text.length > 300) throw 'Seja mais breve, utilize no máximo 300 caracteres.'
    const laporan = `*「 REPORTE 」*\nNúmero : wa.me/${m.sender.split`@`[0]}\nDescrição: ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) 
    m.reply('O problema foi relatado ao proprietário do bot, relatórios falsos não serão respondidos.')
}
handler.help = ['bug', 'report'].map(v => v + ' (descrição)')
handler.tags = ['info']
handler.command = /^(bug|reporte)$/i

module.exports = handler
