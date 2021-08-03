const crypto = require('crypto')

const xp_first_time = 2500
const xp_link_creator = 1500
const xp_bonus = {
    5: 30000,
   10: 70000,
   20: 100000,
   50: 130000,
  100: 500000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Não foi possível utilizar este código de referência!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Código de referência inválido'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Parabéns!
+${xp_first_time} XP
`.trim())
    m.reply(`
Alguém utilizou seu código de referência
+${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Você recebeu ${xp_first_time} XP por utilizar um código de referência\n

Código de referência: *${code}*

${command_link}
`.trim()
    m.reply(`
Você receberá ${xp_link_creator} para cada um que utilizar seu código de referência.\n\n
${users[m.sender].ref_count} pessoa(s) utilizaram seu código de referência.

Seu código de referência: ${code}

Compartilhe o link com amigos: ${command_link}

ou envie uma mensagem a um amigo wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Pessoa(s) = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
handler.help = ['ref']
handler.tags = ['main']

handler.command = ['ref']

handler.register = true

module.exports = handler