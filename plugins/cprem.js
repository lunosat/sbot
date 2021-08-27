let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
    users = global.db.data.users[m.sender]
    let msgSell = `_Olá, para adquirir filiação_ *Premium* _entre em contato com nosso suporte para maiores detalhes._\n\nhttps://wa.me/message/ZAK5F5NE2Q52F1`
    if(user.premium === true) throw 'Você já é um usuário premium, obrigado :)'
    m.reply(msgSell)
    /* const buttons = [
        {buttonId: '.mpago', buttonText: {displayText: 'Mercado Pago'}, type: 1},
        {buttonId: '.pix', buttonText: {displayText: 'Pix'}, type: 1},
        {buttonId: '.premv', buttonText: {displayText: 'Vantagens'}, type: 1}
    ]
    const buttonMessage = {
        contentText: msgSell,
        footerText: 'Sapphire Network',
        buttons: buttons,
        headerType: 1
    }
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)*/
}
handler.command = ['cprem']

module.exports = handler