let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Ferro'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Bronze'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Prata'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Ouro'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Platina'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Diamante'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Mestre'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Grão-mestre'
          : 'Lendário'
  user.role = role
  return true
}

module.exports = handler
