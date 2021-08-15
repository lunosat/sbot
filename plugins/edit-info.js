let handler = async function (m, { text, usedPrefix }){
    let user = global.db.data.users[m.sender]
    text = age
    if(user.registered == false) throw `Você deve se registrar para alterar sua idade, use ${usedPrefix}registrar`
    if(!text) throw 'Coloque sua idade'
    age = parseInt(age)
    if(age > 120) throw 'Você está muito velho para isso, altas emoções para seu velho coração.'
    if(age < 5) throw 'Ainda é muito novo para ver o que tem por aqui...'
    user.age = age
    m.reply(`Sua idade foi alterada com sucesso!
    
    _Nova idade:_ *${age}
    
    _Verifique em seu *${usedPrefix}perfil*`
    .trim())
}
handler.help = ['idade']
handler.tags = ['main']

handler.command = /^(idade|reg(istrar)?)$/i

module.exports = handler