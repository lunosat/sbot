let { MessageType } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    //if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 43200000) return // setiap 12 jam
    let msgHello = `Olá, ${ucapan}\n\nComo podemos lhe ajudar hoje?`
    if (user.banned === true){
        const buttons = [
            {buttonId: '.suporte', buttonText: {displayText: 'Suporte'}, type: 1}
        ]
        const buttonMessage = {
            contentText: 'Infelizmente você está banido de nosso sistema, entre em contato com o suporte para receber ajuda.',
            footerText: 'Sapphire Network',
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
        return
    }
    else{
        const buttons = [
            {buttonId: '.menu', buttonText: {displayText: 'Menu'}, type: 1},
            {buttonId: '.suporte', buttonText: {displayText: 'Suporte'}, type: 1}
        ]
        const buttonMessage = {
            contentText: msgHello,
            footerText: 'Sapphire Network',
            buttons: buttons,
            headerType: 1
        }
    }
}

module.exports = handler
function ucapan() {
    const time = moment.tz('GMT-3').format('HH')
    res = "bom Dia"
    if (time >= 4) {
        res = "bom Dia"
    }
    if (time > 10) {
        res = "boa tarde"
    }
    if (time >= 15) {
        res = "boa tarde"
    }
    if (time >= 18) {
        res = "boa noite"
    }
    return res
}