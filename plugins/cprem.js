let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, {conn, text}) => {
    user = global.db.data.users[m.sender]
    let msgSell = `_A compra de Premium está disponível através de nosso site:_ nify.com.br/sbot/premium`
    if(user.premium === true) throw 'Você já é um usuário premium, obrigado :)'
    if(text === 'vant'){
        m.reply(`Vantagens Premium

- Uso ilimitado de comandos (sem consumir coins)
        
- Pagamento diário maior (5000XP)
        
- 5 SuperCoins (Usada para super comandos, *!entrar* por exemplo) 
        
- Preferência em implementações de sugestões
        
- Suporte 24/7 
        
Este é um sistema que está em seu início, a cada nova atualização traremos novidades`)
        return
    }
    const buttons = [
        {buttonId: '.cprem vant', buttonText: {displayText: 'Vantagens'}, type: 1}
    ]
    const buttonMessage = {
        contentText: msgSell,
        footerText: 'Sapphire Network',
        buttons: buttons,
        headerType: 1
    }
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
}
handler.command = ['cprem']

module.exports = handler