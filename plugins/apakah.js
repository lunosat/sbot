let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
${pickRandom(['Sim','Talve sim','É possível','Provavelmente não','Não','Impossível'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['bot (pergunta)?']
handler.tags = ['fun']
handler.customPrefix = /(\?$)/
handler.command = /^bot$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

