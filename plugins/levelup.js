let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Nível *${user.level} (${user.exp - min}/${xp})*\n\n
Ainda é necessário obter *${max - user.exp}* de EXP.
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
            m.reply(`
_Parabéns, você subiu de nível_!\n\n
*${before}* -> *${user.level}*
\n\nUse *!perfil* para verificar.
	`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler
