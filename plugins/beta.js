async function handler(m, { conn, text, args }) {
    m.reply('Olá, seja bem vindo o nosso programa de beta tester, durante um periodo você testará nosso novo sistema e receberá como recompensa uma filiação Premium.\n\nVocê deverá testar e enviar seu feedback de cada novo recurso que for adicionado.\n\nEntre aqui: https://chat.whatsapp.com/CIJ40MZBdVL2ovDHVf4tux')
  }
  
  // this is chat-update
  // handler.all = function (m, chatUpdate) {
  //  
  // }
  
  // this is executed before normal handler
  // handler.before = function (m) {
  //  
  // }
  
  handler.help = ['beta']
  handler.tags = ['main']
  handler.command = ['beta']
  // handler.owner = false
  // handler.mods = false
  // handler.premium = false
  // handler.group = false
  handler.private = true
  
  // handler.admin = false
  // handler.botAdmin = false
  
  // handler.fail = null
  // handler.exp = 0
  // handler.level = 1
  
  module.exports = handler
  