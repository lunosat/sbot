let handler = async (m, { conn, args, usedPrefix }) => {
  let res = await conn.revokeInvite(m.chat)
  m.reply('O link do grupo foi redefinido!\n\nLink atual:\nhttps://chat.whatsapp.com/' + res.code)
}
handler.help = ['revogar']
handler.tags = ['group']
handler.command = /^re(definir|new)(invite|link)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
