let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Boas vindas alteradas com sucesso\n@user (Menção)\n@subject (Nome do grupo)\n@desc (Descrição do grupo)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setwelcome (texto)']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

