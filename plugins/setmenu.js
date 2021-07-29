let handler = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu alterado com sucesso\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu redefinido', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' aletrado com sucesso\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' redefinido', m)
    }
  }
}
handler.help = ['', 'before', 'header', 'body', 'footer', 'after'].map(v => 'setmenu' + v + ' (teto)')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefixo)
%exp (XP atual)
$maxexp (Xp para levelup)
%totalexp (XP total)
%xp4levelup (XP restante para levelup)
%limit (Coins)
%level (Nível)
%role (Patente)
%name (Nome)
%date (Data)
%time (Hora)
%uptime (Tempo ativo)
%rtotalreg (Número de usuários cadastrados no banco de dados)
%totalreg (Número de usuários no banco de dados)
%npmname
%npmdesc
%version
%github

Cabeçalho e rodapé:
%category (Categorias)

Corpo:
%cmd (Comando)
%islimit (Se for limitado a coins)
%isPremium (Se for para premium)
`.trim()
