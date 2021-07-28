let handler = async (m, { conn, args, command }) => {
    let chat = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only)
    if (command.endsWith('all') || command.endsWith('semua')) {
        for (let i = 0; i < chat.length; i++) { 
            await m.reply('Tchau👋, minha estádia aqui terminou.', chat[i].jid)
            await conn.groupLeave(chat[i].jid)
            await delay(i * 2000) 
        }
        await m.reply('Deixei o grupo com sucesso.')
    } else if (args[0] || args.length > 0) {
        let ada = chat.find(bot => bot.jid == args[0]) 
        if (!ada) throw 'Eu não estou lá.'
        await m.reply('Tchau👋, minha estádia aqui terminou.', args[0])
        await conn.groupLeave(args[0])
        await m.reply('Deixei o grupo com sucesso.')
    } else {
        if (!m.isGroup) return global.dfail('group', m, conn)
        await m.reply('Tchau👋, minha estádia aqui terminou.', m.chat) 
        await conn.groupLeave(m.chat)
    }
}
    
handler.help = ['gc', 'gcall', 'group'].map(v => 'leave' + v)
handler.tags = ['group']
handler.command = /^leaveg(c|ro?up)(all|semua)?$/i

handler.rowner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time)) 