let handler = async (m, { conn, text }) => {
    if(!text) throw 'Quem será o novo usuário Premium?'
    let who
    if(m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if(!who) throw 'Qual o @user?'
    let users = global.db.data.users
    users[who].premium = true
    conn.reply(m.chat, '*Wow, este usuário agora é Premium!!*')
}
handler.help = ['addprem (@user)']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i

handler.rowner = true

module.exports = handler
