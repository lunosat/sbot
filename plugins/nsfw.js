let handler = async (m, {conn}) => {
    chat = global.db.data.chats[m.chat]
    if(chat.nsfw === false){
        chat.nsfw = true
        m.reply('O modo *NSFW* foi ativado para este grupo')
        return
    }
    if(chat.nsfw === true){
        chat.nsfw = false
        m.reply('O modo *NSFW* foi desativado para este grupo')
        return
    }
}
handler.command = ['nsfw']
handler.admin = true
handler.group = true
module.exports = handler