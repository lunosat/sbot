let { MessageType } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    let msgNoLevelup = `
Nível *${user.level} (${user.exp - min}/${xp})*\n\n
Ainda é necessário obter *${max - user.exp}* de EXP.
`
    const buttons = [
      {buttonId: '.pd', buttonText: {displayText: 'Pagamento diário'}, type: 1}
    ]
    const buttonMessage = {
      contentText: msgNoLevelup,
      footerText: 'Sapphire Network',
      buttons: buttons,
      headerType: 1
    }
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
    let msgUpLevel = `
_Parabéns, você subiu de nível_!\n\n
*${before}* -> *${user.level}*`
    const buttons = [
      {buttonId: '.perfil', buttonText: {displayText: 'Perfil'}, type: 1}
    ]
    const buttonMessage = {
      contentText: msgUpLevel,
      footerText: 'Sapphire Network',
      buttons: buttons,
      headerType: 1
    }
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

handler.group = true

module.exports = handler
