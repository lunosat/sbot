let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, text}) => {
  if(text !== 'sim'){
    const buttons = [
      {buttonId: '.revogar sim', buttonText: {displayText: 'Sim'}, type: 1}
    ]

    const buttonMessage = {
      contentText: '*Atenção*\n\nO link de convite deste grupo será alterado e ficará inutilizável!\n\nDeseja continuar?',
      footerText: 'Sapphire Network',
      buttons: buttons,
      headerType: 1
    }

    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
    return
  }
  else{
    let res = await conn.revokeInvite(m.chat)
    m.reply('O link do grupo foi redefinido!\n\nLink atual:\nhttps://chat.whatsapp.com/' + res.code)
  }

  
}
handler.help = ['revogar', 'redefinir']
handler.tags = ['group']
handler.command = /^re(definir|vogar)(invite|link)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
