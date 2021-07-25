let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `Marque a pessoa!`
    if (!global.prems.includes(who.split`@`[0])) throw 'não é premium!'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    conn.reply(m.chat, `@${who.split('@')[0]} perdeu a filiação premium!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['delprem (user)]']
handler.tags = ['owner']
handler.command = /^(remove|hapus|-|del)prem$/i

handler.owner = true

module.exports = handler
