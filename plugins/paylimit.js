let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Insira a quantia de Coins a ser transferida'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Marque o destinatário'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Apenas números'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'O valor mínimo é de 1'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'Você não possuí a quantia de coins que deseja transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Coins) + (${-pjk} Coins (Imposto 2%)) = ( ${-limit} Coins)`)
    conn.fakeReply(m.chat, `+${poin} Coins`, who, m.text)
}
handler.help = ['payc @user (quantia)']
handler.tags = ['xp']
handler.command = /^payc$/
handler.rowner = false
handler.group = true

module.exports = handler

