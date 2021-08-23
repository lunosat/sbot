let handler = async (m, { conn, text }) => {
    if (!m.quoted) return conn.sendMessage(m.chat, 'Qual a mensagem?', 'conversation')
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Está não é uma mensagem de visualização única'
    await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true }).catch(_ => m.reply('Talvez está mensagem já tenha sido aberta pelo bot'))
}
handler.help = ['vermsg']
handler.tags = ['tools']

handler.command = ['vermsg']

module.exports = handler