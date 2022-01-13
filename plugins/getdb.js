const fs = require('fs')

async function handler(m, { conn, text, args }) {
    conn.sendFile(m.chat, fs.createReadStream('../database.json') , 'database.json', '', m)
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
  handler.command = ['getdb']
  handler.owner = false
  // handler.mods = false
  // handler.premium = false
  // handler.group = false
  // handler.private = false
  
  // handler.admin = false
  // handler.botAdmin = false
  
  // handler.fail = null
  // handler.exp = 0
  // handler.level = 1
  
  
  module.exports = handler
  