let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m, {conn, text}) => {
    user = global.db.data.users[m.sender]
    const json = JSON.parse(fs.readFileSync('./src/premium.json'))
    
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let username = conn.getName(who)

    eID = '5511973584242@s.whatsapp.net'
    //ṕix
    premPix = '00020126770014BR.GOV.BCB.PIX0136b9ddbf84-1f4a-4cb4-b3e5-792b043756290215Premium - 1 mês52040000530398654045.005802BR5918Rian Bezerra Souza6009SAO PAULO61080540900062070503***6304D5A4'
    scPix = '00020126740014BR.GOV.BCB.PIX0136b9ddbf84-1f4a-4cb4-b3e5-792b0437562902125 SuperCoins52040000530398654042.505802BR5918Rian Bezerra Souza6009SAO PAULO61080540900062070503***6304A43C'
    //Mercado Pago
    premMP = 'https://mpago.la/2UFKpXJ'
    scMp = 'https://mpago.la/2aVKvpT'
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

//SUPERIOR >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    msgScPixPRComprador = `*Yupp 🥳*

_Estamos analisando seu pagamento, os SuperCoins serão debitados o mais breve possível_
    
_Assim que concluído entramos em contato._ ⏳`
    msgScMpPRComprador = `*Yupp 🥳*

_Estamos analisando seu pagamento, os SuperCoins serão debitados o mais breve possível_
    
_Assim que concluído entramos em contato._ ⏳`
    msgScPixPREquipe = `*Nova compra relatada:*

*Serviço:* 5 SuperCoins
    
*Número:* ${who.split`@`[0]}
    
*Forma de pagamento:* Pix
    
*Status:* Aguardando análise`
    msgScMpPREquipe = `*Nova compra relatada:*

*Serviço:* 5 SuperCoins
    
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
    
_Pagamento diario de 5.000XP_
    
_Adicionar a grupos_

_E muito mais em breve_
    
\n*Escolha a forma de pagamento:*`

    msgFP = `_Confirme a forma de pagamento desejada._`

    ////////////////////////////////////////////////////
    if(m.isGroup) throw `🏪 Loja 🏪

_Nossa loja está disponível somente em chat privado, por favor utilize este comano (!loja) no privado._`
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
            //{buttonId: '.loja sc-pix', buttonText: {displayText: 'Pix / Mercado Pago'}, type: 1},
            {buttonId: '.loja sc-xp', buttonText: {displayText: 'EXP'}, type: 1},
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
    else if(text === 'sc-xp'){
        const buttons = [
            {buttonId: '.loja sc-xp-5', buttonText: {displayText: '5 SC (75.000 XP)'}, type: 1},
            {buttonId: '.loja sc-xp-10', buttonText: {displayText: '10 SC (150.000 XP)'}, type: 1},
            {buttonId: '.loja sc-xp-15', buttonText: {displayText: '15 SC (225.000 XP)'}, type: 1}
        ]

        const buttonMessage = {
            contentText: '_Escolha a quantia de_ *SuperCoins* _desejada_',
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'sc-xp-5'){
        const buttons = [
            {buttonId: '.loja sc-xp-5-pr', buttonText: {displayText: 'Confirmar compra'}, type: 1},
        ]

        const buttonMessage = {
            contentText: '_Você está prestes a comprar_ *5 SuperCoins* _por_ *75.000 XP*',
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'sc-xp-10'){
        const buttons = [
            {buttonId: '.loja sc-xp-10-pr', buttonText: {displayText: 'Confirmar compra'}, type: 1},
        ]

        const buttonMessage = {
            contentText: '_Você está prestes a comprar_ *10 SuperCoins* _por_ *150.000 XP*',
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'sc-xp-15'){
        const buttons = [
            {buttonId: '.loja sc-xp-15-pr', buttonText: {displayText: 'Confirmar compra'}, type: 1},
        ]

        const buttonMessage = {
            contentText: '_Você está prestes a comprar_ *15 SuperCoins* _por_ *225.000 XP*',
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

        return
    }
    else if(text === 'sc-xp-5-pr'){
        if(user.exp <= 75000) throw 'Você não possuí o XP suficiente'
        m.reply('*Compra realizada*\n\n+ 5 SuperCoins')
        user.superCoins = user.superCoins + 5
        user.exp = user.exp - 75000
    }
    else if(text === 'sc-xp-10-pr'){
        if(user.exp <= 150000) throw 'Você não possuí o XP suficiente'
        m.reply('*Compra realizada*\n\n+ 10 SuperCoins')
        user.superCoins = user.superCoins + 10
        user.exp = user.exp - 159000
    }
    else if(text === 'sc-xp-15-pr'){
        if(user.exp <= 225000) throw 'Você não possuí o XP suficiente'
        m.reply('*Compra realizada*\n\n+ 15 SuperCoins')
        user.superCoins = user.superCoins + 15
        user.exp = user.exp - 225000
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

        if(user.superCoins < 15) throw `É necessário *15 SuperCoins* para comprar filiação Premium.`

        if (json.includes(who.split`@`[0])) throw `Você já é um usuário Premium!`
        json.push(`${who.split`@`[0]}`)
        fs.writeFileSync('./src/premium.json', JSON.stringify(json))
        m.reply(`Parabéns ${conn.getName(who)}! você agora é um usuário *Premium*`)

        delete require.cache[require.resolve('../config')]
        require('../config')

        user.superCoins = user.superCoins - 15
    }
    
    else if(text === 'prem-pix-pix'){
        m.reply(premPix)
        const buttons = [
            {buttonId: '.loja prem-pix-pr', buttonText: {displayText: 'Confirmar Pagamento'}, type: 1},
        ]

        const buttonMessage = {
            contentText: '_Realize o pagamento com o código pix_ *copia e cola* _enviado._\n\n*Somente após o pagamento click no botão abaixo*',
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
            contentText: '_Realize o pagamento através do link enviado._\n\n*Somente após o pagamento click no botão abaixo*',
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
        return
    }
    else if(text === 'sc-pix-mp'){
        m.reply(scMp)
        const buttons = [
            {buttonId: '.loja sc-mp-pr', buttonText: {displayText: 'Confirmar Pagamento'}, type: 1},
        ]

        const buttonMessage = {
            contentText: '_Realize o pagamento através do link enviado._\n\n*Somente após o pagamento click no botão abaixo*',
            footerText: 'Ni-Bot',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
        return
    }
    else if(text === 'sc-pix-pix'){
        m.reply(scPix)
        const buttons = [
            {buttonId: '.loja sc-pix-pr', buttonText: {displayText: 'Confirmar Pagamento'}, type: 1},
        ]

        const buttonMessage = {
            contentText: '_Realize o pagamento com o código pix_ *copia e cola* _enviado._\n\n*Somente após o pagamento click no botão abaixo*',
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
    else if(text === 'sc-pix-pr'){
        m.reply(msgScPixPRComprador, m.sender)
        m.reply(msgScPixPREquipe, eID)
    }
    else if(text === 'sc-mp-pr'){
        m.reply(msgScMpPRComprador, m.sender)
        m.reply(msgScMpPREquipe, eID)
    }
}
handler.help = ['loja']
handler.tags = ['main']
handler.command = ['loja']
handler.group = false
module.exports = handler
