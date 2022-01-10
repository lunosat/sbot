async function handler(m, { conn, text, args }) {
    m.reply('Olá, seja bem vindo ao nosso programa de beta testers, durante um periodo você testará nosso novo sistema e receberá como recompensa algumas vantagens de acordo com seu nível de ajuda.\n\nVocê deverá testar e enviar seu feedback de cada novo recurso que for adicionado ou que já foi implementado.\n\nEntre aqui: https://chat.whatsapp.com/J3y1RrM4Yx400VXbiinXxy')
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
  
