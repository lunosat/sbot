let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*nenhuma votação ativa neste grupo!*_\n\n*${usedPrefix}votacao* - para iniciar uma votação`
    delete conn.vote[id]
    m.reply(`Pronto!`)

}
handler.help = ['pvotacao']
handler.tags = ['vote']
handler.command = /^(p|votacao)vote$/i
handler.group = true
handler.admin = true
module.exports = handler