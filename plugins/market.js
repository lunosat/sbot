let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, {conn, text}) => {
    user = global.db.data.users[m.sender]
    
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let username = conn.getName(who)

    eID = '5511973584242@s.whatsapp.net'
    //ṕix
    premPix = '00020126770014BR.GOV.BCB.PIX0136b9ddbf84-1f4a-4cb4-b3e5-792b043756290215Premium - 1 mês52040000530398654045.005802BR5918Rian Bezerra Souza6009SAO PAULO61080540900062070503***6304D5A4'
    scPix5 = ''
    scPix10 = ''
    scPix20 = ''
    //Mercado Pago
    premMP = 'https://mpago.la/2UFKpXJ'
    scMp5 = ''
    scMp10 = ''
    scMp20 = ''
    //Msgs confirmação PREMIUM

    msgPremPixPRComprador = `*Yupp 🥳*

_Estamos analisando seu pagamento, a filiação Premium será ativa o mais breve possível_
    
_Assim que concluído entramos em contato._ ⏳`
    msgPremMpPRComprador = `*Yupp 🥳*

_Estamos analisando seu pagamento, a filiação Premium será ativa o mais breve possível_
    
_Assim que concluído entramos em contato._ ⏳`
    msgPremPixPREquipe = `*Nova compra relatada:*

*Serviço:* Premium
    
*Número:* ${who.split`@`[0]}
    
*Forma de pagamento:* Pix
    
*Status:* Aguardando análise`
    msgPremMpPREquipe = `*Nova compra relatada:*

*Serviço:* Premium
    
*Número:* ${who.split`@`[0]}
    
*Forma de pagamento:* Mercado Pago
    
*Status:* Aguardando análise`
    //Mensagens >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
    msgLoja = `🏪 *Loja* 🏪

_Olá ${username}, seja bem vindo(a) a nossa loja, por favor escolha o produto que deseja abaixo._`

    msgSC = `🏪 *Loja - SuperCoins* 🏪

_Os SuperCoins podem ser utilizados para comprar Premium ou utilizar comandos Premium_\n\n_Escolha a forma de pagamento:_`

    msgPrem = `🏪 *Loja - Premium* 🏪

*A filiação Premium lhe dá direito as seguintes vantagens:*
    
_Coins ilimitados_
    
_Consultas Ilimitadas_
    
_Adicionar a grupos_

_E muito mais em breve_
    
\n*Escolha a forma de pagamento:*`

    msgFP = `🏪 Loja - Pagamento 🏪

_Escolha o método abaixo._`

    ////////////////////////////////////////////////////

    if(!text){
        const buttons = [
            {buttonId: '.loja sc', buttonText: {displayText: 'SuperCoins'}, type: 1},
            {buttonId: '.loja prem', buttonText: {displayText: 'Premium'}, type: 1}
        ]

        const buttonMessage = {
            contentText: msgLoja,
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'sc'){
        const buttons = [
            {buttonId: '.loja sc-pix', buttonText: {displayText: 'Pix / Mercado Pago'}, type: 1},
            {buttonId: '.loja sc-xp', buttonText: {displayText: 'EXP'}, type: 1}
        ]

        const buttonMessage = {
            contentText: msgSC,
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'prem'){
        const buttons = [
            {buttonId: '.loja prem-pix', buttonText: {displayText: 'Pix / Mercado Pago'}, type: 1},
            {buttonId: '.loja prem-sc', buttonText: {displayText: 'SuperCoins'}, type: 1}
        ]

        const buttonMessage = {
            contentText: msgPrem,
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'sc-pix'){
        const buttons = [
            {buttonId: '.loja sc-pix-pix', buttonText: {displayText: 'Pix'}, type: 1},
            {buttonId: '.loja sc-pix-mp', buttonText: {displayText: 'Mercado Pago'}, type: 1}
        ]

        const buttonMessage = {
            contentText: msgFP,
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'prem-pix'){
        const buttons = [
            {buttonId: '.loja prem-pix-pix', buttonText: {displayText: 'Pix'}, type: 1},
            {buttonId: '.loja prem-pix-mp', buttonText: {displayText: 'Mercado Pago'}, type: 1}
        ]

        const buttonMessage = {
            contentText: msgFP,
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'prem-sc'){
        const buttons = [
            {buttonId: '.loja prem-sc-comprou', buttonText: {displayText: 'Confirmar Compra'}, type: 1},
        ]

        const buttonMessage = {
            contentText: '_Você está prestes a comprar_ *Premium* _por_ *15 SuperCoins*',
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'prem-sc-comprou'){
        
    }
    
    else if(text === 'prem-pix-pix'){
        m.reply(premPix)
        const buttons = [
            {buttonId: '.loja prem-pix-pr', buttonText: {displayText: 'Pix'}, type: 1},
        ]

        const buttonMessage = {
            contentText: '_Realize o pagamento com o código pix_ *copia e cola* _acima._\n\n*Somente após o pagamento click no botão abaixo*',
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'prem-pix-mp'){
        m.reply(premMP)
        const buttons = [
            {buttonId: '.loja prem-mp-pr', buttonText: {displayText: 'Confirmar Pagamento'}, type: 1},
        ]

        const buttonMessage = {
            contentText: '_Realize o pagamento através do link acima._\n\n*Somente após o pagamento click no botão abaixo*',
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
        return
    }
    else if(text === 'prem-pix-pr'){
        
        m.reply(msgPremPixPRComprador, m.sender)
        m.reply(msgPremPixPREquipe, eID)
    }
    else if(text === 'prem-mp-pr'){
        
        m.reply(msgPremMpPRComprador, m.sender)
        m.reply(msgPremMpPREquipe, eID)
    }
    else if(text === 'sc-pix-pix'){
    
    }
    else if(text === 'sc-pix-mp'){

    }
}
handler.help = ['loja']
handler.tags = ['main']
handler.command = ['loja']
handler.group = false
module.exports = handler
