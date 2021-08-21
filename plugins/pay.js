let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Insira a quantidade de XP a ser transferida'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Marque a pessoa'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Apenas números'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'O valor mínimo é de 1'
  let users = global.db.data.users
  if (exp > users[m.sender].exp) throw 'Você não tem a quantia que deseja transferir'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(${-xp} XP) + (${-pjk} XP (Imposto 2%)) = ( ${-exp} XP)`)
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['pay @user (quantia)']
handler.tags = ['xp']
handler.command = /^pay$/
handler.rowner = false
handler.group = true

module.exports = handler

