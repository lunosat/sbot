let handler = async function (m, { text, usedPrefix }){
    let user = global.db.data.users[m.sender]
    let [name, ...age] = text.split(".")
    if(!age && !name) throw `Formato incorreto!\n\nUtilize o formato *${usedPrefix}einfo Nome.Idade*\n\n*Exemplo:* ${usedPrefix}einfo Ana.21`
    //let age = text
    if(user.registered == false) throw `Você deve se registrar para alterar sua idade, use ${usedPrefix}registrar`
    age = parseInt(age)
    if(age > 120) throw 'Você está muito velho para isso, altas emoções para seu velho coração.'
    if(age < 5) throw 'Ainda é muito novo para ver o que tem por aqui...'
    user.age = age
    user.name = name
    m.reply(`Suas informações foram alteradas com sucesso!
    
╭─「 Informações 」
│ Nome: ${name}
│ Idade: ${age} anos
╰────

Verifique em seu *!perfil*`
    .trim())
}
handler.help = ['einfo']
handler.tags = ['main']

handler.command = /^(einfo|reg(istrar)?)$/i
handler.limit = true
handler.group = false
handler.register = true

module.exports = handler