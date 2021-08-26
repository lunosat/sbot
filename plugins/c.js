let handler = async (m, {conn, text}) => {
    chat = global.db.data.chats[m.chat]
    if(text === 'nsfw'){
        if(chat.nsfw === false){
            chat.nsfw = true
            m.reply('O modo *NSFW* foi ativado para este grupo')
            return
        }
        else if(chat.nsfw === true){
            chat.nsfw = false
            m.reply('O modo *NSFW* foi desativado para este grupo')
            return
        }
        return
    }
    else if(text === 'simi'){
        if(chat.simi === false){
            chat.simi = true
            m.reply('Simi foi ativado para este chat.')
            return
        }
        else if(chat.simi === true){
            chat.simi = false
            m.reply('Simi foi desativado para este chat.')
        }
        return
    }
}
handler.command = ['c']
handler.admin = true
handler.group = true
module.exports = handler