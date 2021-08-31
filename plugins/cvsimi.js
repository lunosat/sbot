let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
    chat = global.db.data.chats[m.chat]
    if(chat.simi === true){
        const buttons = [
            {buttonId:'.simi', buttonText: {displayText:'Desativar SimSimi'}, type: 1}
        ]
        const buttonMessage = {
            contentText: 'O *Voice SimSimi* não pode ser ativado juntamente com *SimSimi*',
            footerText: 'Nify INC ©',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat,buttonMessage, MessageType.buttonsMessage)
        return
    }
    if(chat.vsimi === false){
        chat.vsimi = true
        m.reply('O *Voice SimSimi* foi ativado para este grupo')
        return
    }
    if(chat.vsimi === true){
        chat.vsimi = false
        m.reply('O *Voice SimSimi* foi desativado para este grupo')
        return
    }
}
handler.command = ['vsimi']
handler.owner = true
handler.admin = true
handler.group = true
module.exports = handler
