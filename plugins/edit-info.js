let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

    
let handler = async function (m, { text, usedPrefix }){
    let user = global.db.data.users[m.sender]
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let username = conn.getName(who)
    if(user.registered === false){
        const btnsReg = [
            {buttonId: `.registrar ${username}.18`, buttonText: {displayText: 'Registrar-se'}, type: 1},
        ]

        const btnMsg = {
            contentText: 'Você deve estar registrado para utilizar este recurso.',
            footerText: 'Sapphire Network',
            buttons: btnsReg,
            headerType: 1
        }
        conn.sendMessage(m.chat, btnMsg, MessageType.buttonsMessage)
        return

    }
    if(!text) throw `Siga o formato: ${usedPrefix}einfo Nome.Idade\n\n*Exemplo:* ${usedPrefix}einfo Maria.18`
    let [name, ...age] = text.split(".")
    if(!name) throw 'Deve inserir seu nome.'
    if(!age) throw 'Deve inserir sua idade.'
    //let age = text
    
    age = parseInt(age)
    if(age > 120) throw 'Você está muito velho para isso, altas emoções para seu velho coração.'
    if(age < 5) throw 'Ainda é muito novo para ver o que tem por aqui...'
    user.age = age
    user.name = name 

    const buttons = [
        {buttonId: '.perfil', buttonText: {displayText: 'Perfil'}, type: 1},
    ]

    const buttonMessage = {
        contentText: `_Suas informações foram alteradas com sucesso!_

    ┌─【 Informações 】
    │ *Nome:* ${name}
    │ *Idade:* ${age} anos
    └────`,
        footerText: 'Sapphire Network',
        buttons: buttons,
        headerType: 1
    }
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage )
}
handler.help = ['einfo']
handler.tags = ['main']

handler.command = /^(einfo)$/i
handler.limit = true
handler.group = true
handler.register = false

module.exports = handler