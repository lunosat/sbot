let handler = async (m, {conn, text}) => {
    conn.reply(m.chat, 'teste')
  }
  
  // this is chat-update
  // handler.all = function (m, chatUpdate) {
  //  
  // }
  
  // this is executed before normal handler
  // handler.before = function (m) {
  //  
  // }
  
  // handler.help = [''].map(v => v + ' <>')
  // handler.tags = ['']
  handler.command = ['tagme']
  // handler.owner = false
  // handler.mods = false
  // handler.premium = false
  // handler.group = false
  // handler.private = false
  
  // handler.admin = false
  // handler.botAdmin = false
  
  // handler.fail = null
  // handler.exp = 0
  // handler.level = 1
  
  //handler.disabled = true
  
  module.exports = handler
  