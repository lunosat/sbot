let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Reiniciando sistema...\n\nEste processo pode levar até 1 minuto')
    await global.db.write()
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['reiniciar' + (process.send ? '' : ' (Fora de serviço)')]
handler.tags = ['host']
handler.command = /^reiniciar$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

