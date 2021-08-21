let { MessageType } = require('@adiwajshing/baileys')
let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
	let user = global.db.data.users[m.sender]
	if (!user.autolevelup) return !0
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

		/*
            m.reply(`
_Parabéns, você subiu de nível_!\n\n
*${before}* -> *${user.level}*
\n\nUse *!perfil* para verificar.
	`.trim()) */
        }
}

module.exports = handler
