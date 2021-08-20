let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    //if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 43200000) return // setiap 12 jam
    await this.sendButton(m.chat, `
Olá, ${ucapan()}

${user.banned ? 'você está banido' : 'Como posso lhe ajudar?'}
`.trim(), 'Sa', user.banned ? 'Suporte' : 'Menu', user.banned ? '.dono' : '.menu')
    user.pc = new Date * 1
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