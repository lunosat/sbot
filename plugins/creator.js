function handler(m) {
  this.sendContact(m.chat, '5511973584242', 'Akirah', m)
}
handler.help = ['dono', 'criador']
handler.tags = ['info']

handler.command = /^(dono|criador)$/i

module.exports = handler
