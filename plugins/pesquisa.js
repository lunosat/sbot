
let handler = async(m, { conn, text }) => {
    let user = global.db.data.users[m.sender]
    if(user.pesquisa === true) throw 'Você já respondeu a última pesquisa, Nify Tech agradece.'
    if (!text) throw '_Por favor escreva sua reposta._'
    if (text.length > 500) throw 'Seja mais breve, utilize no máximo 500 caracteres.'
    const laporan = `*「 Pesquisa 」*\nNúmero : wa.me/${m.sender.split`@`[0]}\nResposta: ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '5511973584242@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) 
    m.reply('_Muito obrigado por sua reposta!_\n\n._+1000 XP_')
}

handler.command = /^(r)$/i

module.exports = handler
