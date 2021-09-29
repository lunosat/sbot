let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
  ┌─【 %me 】
│ Olá, %name!
│
│ *%limit Coins*
│ Patente: *%role*
│ Nível *%level (%exp / %maxexp)* (%xp4levelup)
│ %totalexp XP total
│ 
│ Data: *%date*
│ Hora: *%time*
│
│ Atividade: *%uptime (%muptime)*
│ Usuário: %rtotalreg de %totalreg registrados
│ Telegram: https://t.me/nifytech
└────
  %readmore`.trimStart(),
    header: '┌─【 %category 】',
    body: '│ ↣ %cmd %islimit %isPremium',
    footer: '└────\n',
    after: `
  *%npmname@^%version*
  ${'```%npmdesc```'}
  `,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['completo', 'jogos', 'xp', 'stickers', 'adulto', 'admin', 'grupos', 'premium', 'internet', 'anonymous', 'imagens', 'downloads', 'ferramentas', 'aleatorio', 'database', 'audio', 'teste', 'votos', 'info', 'indefinido', 'nify']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'completo') tags = {
    'main': 'Principal',
  'game': 'Jogos',
  'xp': 'Exp & Coins',
  'sticker': 'Stickers',
  'adult': 'Hentai & Porn',
  'admin': 'Administrador',
  'group': 'Grupos',
  'premium': 'Premium',
  'internet': 'Internet',
  'anonymous': 'Chat anônimo',
  'nulis': 'Imagens',
  'downloader': 'Downloads',
  'tools': 'Ferramentas',
  'fun': 'Diversão',
  'database': 'Database',
  'vote': 'Votação',
  'testbot': 'Bot de teste',
  'owner': 'Dono',
  'host': 'Host',
  'advanced': 'Avançado',
  'info': 'Informações',
  'ausen': 'Ausência',
  'audio': 'Áudio',
  'maker': 'Image Maker',
  '': 'Sem categoria',
  }
  if (teks == 'jogos') tags = {
    'game': 'Jogos'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Coins'
  }
  if (teks == 'stickers') tags = {
    'sticker': 'Stickers'
  }
  if (teks == 'adulto') tags = {
    'adult': 'Hentai & Porn'
  }
  if (teks == 'admin') tags = {
    'admin': `Administrador ${global.opts['restrict'] ? '' : '(Desabilitado)'}`
  }
  if (teks == 'grupos') tags = {
    'group': 'Grupos'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Chat anônimo'
  }
  if (teks == 'imagens') tags = {
    'nulis': 'Imagens',
    'maker': 'Image Maker'
  }
  if (teks == 'downloads') tags = {
    'downloader': 'Downloads'
  }
  if (teks == 'ferramentas') tags = {
    'tools': 'Ferramentas'
  }
  if (teks == 'aleatorio') tags = {
    'fun': 'Aleatório'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'votos') tags = {
    'vote': 'Votação',
    'ausen': 'Ausente'
  }
  if (teks == 'audio') tags = {
    'audio': 'Áudio'
  }
  if (teks == 'teste') tags = {
    'testbot': 'Bot de teste'
  }
  if (teks == 'info') tags = {
    'info': 'Informações'
  }
  if (teks == 'indefinido') tags = {
    '': 'Sem categoria'
  }
  if (teks == 'nify') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    })

    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `${ucapan()}, ${name}`.trim(),
          "description": "Ni-Bot ©",
          "buttonText": "Abrir menu",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `Completo`,
                  "description": "",
                  "rowId": ".menu completo"
                }, {
                  "title": "Jogos",
                  "description": "",
                  "rowId": ".menu jogos"

                }, {
                  "title": "EXP & Coins",
                  "description": "",
                  "rowId": ".menu xp"

                }, {
                  "title": "Stickers",
                  "description": "",
                  "rowId": ".menu stickers"
                }, {
                  "title": "Conteúdo adulto",
                  "description": "",
                  "rowId": ".menu adulto"
                }, {
                  "title": "Administrador",
                  "description": "",
                  "rowId": ".menu admin"
                }, {
                  "title": "Grupos",
                  "description": "",
                  "rowId": ".menu grupos"
                }, {
                  "title": "Premium",
                  "description": "",
                  "rowId": ".menu premium"
                }, {
                  "title": "Internet",
                  "description": "",
                  "rowId": ".menu internet"
                }, {
                  "title": "Chat anônimo",
                  "description": "",
                  "rowId": ".menu anonymous"
                }, {
                  "title": "Imagens",
                  "description": "",
                  "rowId": ".menu imagens"
                }, {
                  "title": "Downloads",
                  "description": "",
                  "rowId": ".menu downloads"
                }, {
                  "title": "Ferramentas",
                  "description": "",
                  "rowId": ".menu ferramentas"
                }, {
                  "title": "Diversos",
                  "description": "",
                  "rowId": ".menu aleatorio"
                }, {
                  "title": "Database",
                  "description": "",
                  "rowId": ".menu database"
                }, {
                  "title": "Votação & Ausência",
                  "description": "",
                  "rowId": ".menu votos"
                }, {
                  "title": "Áudio",
                  "description": "",
                  "rowId": ".menu audio"
                }, {
                  "title": "Bot de teste",
                  "description": "",
                  "rowId": ".menu teste"
                }, {
                  "title": "Informações",
                  "description": "",
                  "rowId": ".menu info"
                }, {
                  "title": "Sem categoria",
                  "description": "",
                  "rowId": ".menu indefinido"
                }, {
                  "title": "Nify Agents",
                  "description": "",
                  "rowId": ".menu nify"
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
    
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Apresentado por https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Coins)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Pronto para *${_p}levelup*` : `${max - exp} XP para levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), 'Ni-Bot | Nify Tech', 'Loja', '.loja', 'Suporte', '.sup', m)
  } catch (e) {
    conn.reply(m.chat, 'Ops... há algum erro com o menu, se persistir contate o !suporte', m)
    throw e
  }
}
handler.help = ['menu', 'help', 'comandos']
handler.tags = ['main']
handler.command = /^(menu|help|comandos)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('BRT').format('HH')
  res = "Bom Dia"
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