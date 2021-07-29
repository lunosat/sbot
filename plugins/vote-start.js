let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_Há uma votação ativa neste chat!_\n\n*${usedPrefix}pvotacao* - para cancelar a votação anterior`
    }
    m.reply(`Votação iniciada!\n\n*${usedPrefix}pvoto* - votar positivamente\n*${usedPrefix}nvoto* - votar negativamente\n*${usedPrefix}vervotos* - verificar votos\n*${usedPrefix}pvotacao* - encerrar votação`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['votacao (tema)']
handler.tags = ['vote']
handler.command = /^(votacao|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler