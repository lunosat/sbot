let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    //if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Olá, ${ucapan()}

${user.banned ? 'Você está banido!' : 'Como posso lhe ajudar hoje??'}
`.trim(), 'Ni-Bot', user.banned ? 'Suporte' : 'Menu', user.banned ? '.sup' : '.menu')
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('UTC-3').format('HH')
    res = "Bom dia"
    if (time >= 4) {
        res = "Bom Dia"
    }
    if (time > 10) {
        res = "Boa tarde"
    }
    if (time >= 15) {
        res = "Boa tarde"
    }
    if (time >= 18) {
        res = "Boa noite"
    }
    return res
}