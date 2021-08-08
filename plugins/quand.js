let handler = async (m, {conn, text}) => {
    conn.reply(m.chat,
    `${pickRandom(['Nunca', 'Talvez amanhã', 'Agora mesmo', 'No próximo ano', 'No dia de são nunca'])}`
    .trim(), m, m.mentionedJid ? {
        contextInfo: {
            mentionedJid: m.mentionedJid
        }
    }: {})
}
handler.help = ['quando (pergunta)?']
handler.tags = ['fun']
handler.customPrefix = /(\?$)/
handler.command = /^quando$/i
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
module.exports = handler