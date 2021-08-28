let handler = async (m, {conn}) => {
    chat = global.db.data.chats[m.chat]
    if(chat.simi === false){
        chat.simi = true
        m.reply('O *SimSimi* foi ativado para este grupo')
        return
    }
    if(chat.simi === true){
        chat.simi = false
        m.reply('O *SimSimi* foi desativado para este grupo')
        return
    }
}
handler.command = ['simi']
handler.admin = true
handler.group = true
module.exports = handler