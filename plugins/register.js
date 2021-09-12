const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Você já está registrado\n\nDeseja se registrar novamente? ${usedPrefix}unreg (N. Serial)`
  if (!Reg.test(text)) throw `Formato Incorreto\n\n*${usedPrefix}registrar Nayara.20*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Deve utilizar ao menos 1 nome.'
  if (!age) throw 'Deve colocar sua idade.'
  age = parseInt(age)
  if (age > 120) throw 'Hmmm... aqui consta que não está vivo, não podemos prosseguir.'
  if (age < 5) throw 'Sua mãe deixou?'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Registrado com sucesso!

┌─【 Informações 】
│ Nome: ${name}
│ Idade: ${age} anos
│ N. Serial: ${sn}
└────

*Guarde seu número de série*
`.trim())
}
handler.help = ['reg', 'registrar'].map(v => v + ' (nome).(idade)')
handler.tags = ['exp']

handler.command = /^(r|reg(istrar)?)$/i

module.exports = handler

