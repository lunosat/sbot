let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_Há uma votação ativa neste chat!_\n\n*${usedPrefix}pvotacao* - para cancelar a votação anterior`
    }
    const rows = [
        {title: 'Sim', description: ' ', rowId: '.pvoto'},
        {title: 'Não', description: ' ', rowId: '.nvote'},
        {title: 'Verificar votação', description: ' ', rowid: '.vervotos'}
    ]
    const sections = [{title: "Votação", rows: rows}]

    const button = {
        buttonText: 'Votar', 
        description: 'Uma votação foi iniciada!\n\nVote a seguir.', 
        sections: sections,
        listType: 1
    }
    conn.sendMessage(m.chat, button, MessageType.listMessage)
    //m.reply(`Votação iniciada!\n\n*${usedPrefix}pvoto* - votar positivamente\n*${usedPrefix}nvoto* - votar negativamente\n*${usedPrefix}vervotos* - verificar votos\n*${usedPrefix}pvotacao* - encerrar votação`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['votacao (tema)']
handler.tags = ['vote']
handler.command = /^(votacao)$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler