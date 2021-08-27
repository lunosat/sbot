function handler(m) {
  m.reply('_Estes são nossos contatos de suporte, lembre-se de ser claro sobre o que necessita ao entrar em contato._')
  this.sendContact(m.chat, '5511973584242', 'Akirah', m)
}
handler.help = ['suporte']
handler.tags = ['info']

handler.command = /^(suporte|sup)$/i

module.exports = handler
