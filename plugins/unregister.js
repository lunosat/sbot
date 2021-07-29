const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Preciso do número de série para prosseguir'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Número de série não reconhecido'
  user.registered = false
  m.reply(`Registro removido com sucesso.`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' (N. Sério)')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

