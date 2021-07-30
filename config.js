global.owner = ['5511973584242', '559991058765'] // Seu número aqui
global.mods = [] // Precisa de ajuda?
global.prems = [] // Usuários premium tem coins ilimitados
global.APIs = { // API Prefix
  // web: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz'
}
global.APIKeys = { // APIKey aqui
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'akirahxxx',
  'https://pencarikode.xyz': 'pais'
}

// Sticker WM
global.packname = 'Sapphire Wabot'
global.author = 'bit.ly/sapp-wabot'

global.multiplier = 30 // Levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
