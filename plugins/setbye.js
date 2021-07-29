let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('Despedidas atualizada com sucesso\n@user (Menção)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setbye (texto)']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

