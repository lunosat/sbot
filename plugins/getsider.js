let handler = async (m, { conn }) => {
  if (!m.quoted) throw 'Marque a mensagem!'
  if (!m.quoted.fromMe) throw false
  if (!m.quoted.id) throw false
  let members = m.quoted.chat.endsWith('g.us') ? (await conn.groupMetadata(m.quoted.chat)).participants.length - 1 : m.quoted.chat.endsWith('@broadcast') ? -1 : 1
  let { reads, deliveries } = await conn.messageInfo(m.quoted.chat, m.quoted.id)
  let txt = `
*Lida por:*
${reads.sort((a, b) => b.t - a.t).map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`).join('\n')}
${members > 1 ? `${members - reads.length} restantes` : ''}

*Entregue para:*
${deliveries.sort((a, b) => b.t - a.t).map(({ jid, t }) => `wa.me/${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`).join('\n')}
${members > 1 ? `${members - reads.length - deliveries.length} restantes` : ''}
`.trim()
  m.reply(txt, null, {
    contextInfo: {
      mentionedJid: conn.parseMention(txt)
    }
  })
}
handler.help = ['lidapor']
handler.tags = ['group']

handler.command = /^lidaporr$/

module.exports = handler

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
