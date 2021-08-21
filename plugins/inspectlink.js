let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
  let [, code] = text.match(linkRegex) || []
  if (!code) throw 'Link inválido'
  let res = await conn.query({
    json: ["query", "invite", code],
    expect200: true
  })
  if (!res) throw res
  let caption = `
-- [Inspetor de link] --
${res.id}
*Nome:* ${res.subject}
*Criado* por @${res.id.split('-')[0]} em *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `
*Nome alterado* por @${res.subjectOwner.split`@`[0]} em *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `
*Descrição alterada* por @${res.descOwner.split`@`[0]} em *${formatDate(res.descTime * 1000)}*` : ''}
*Membros:* ${res.size}
*Membros conhecidos*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'Nenhum'}
${res.desc ? `*Descrição:*
${res.desc}` : '*Sem descrição*'}

*Versão JSON*
\`\`\`${JSON.stringify(res, null, 1)}\`\`\`
`.trim()
  let pp = await conn.getProfilePicture(res.id).catch(console.error)
  if (pp) conn.sendFile(m.chat, pp, 'pp.jpg', null, m)
  m.reply(caption, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(caption)
    }
  })
}
handler.help = ['inspecionar (chat.whatsapp.com)']
handler.tags = ['tools']

handler.command = /^inspecionar$/i

handler.group = true



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