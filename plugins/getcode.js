let handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Este comando é apenas para aqueles que são bots', m)
  else global.conn.reply(conn.user.jid, `${usedPrefix}testbot ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, m)
}
handler.help = ['getcode']
handler.tags = ['testbot']
handler.command = /^(getcode)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

