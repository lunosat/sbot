let handler = async (m, {conn}) => {
    chat = global.db.data.chats[m.chat]
    if(chat.vsimi === true){
        const buttons = [
            {buttonId:'.vsimi', buttonText: {displayText:'Desativar V. SimSimi'}, type: 1}
        ]
        const buttonMessage = {
            contentText: 'O *SimSimi* não pode ser ativado juntamente com *Voice SimSimi*',
            footerText: 'Nify INC ©',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat,buttonMessage, MessageType.buttonsMessage)
        return
    }
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