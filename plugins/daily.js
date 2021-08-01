const free = 500
const prem = 5000
let handler = async (m, { isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `Você já recebeu seu pagamento diário hoje\nEspere por mais ${msToTime(time - new Date())}`
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`*Pagamento coletado!*\n\n+${isPrems ? prem : free} XP\n\n_Usuários premium recebem mais..._`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['pd', 'payday']
handler.tags = ['xp']
handler.command = /^(pd|payday)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " horas " + minutes + " minutos"
}