let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn }) => {
  const buttons = [
    {buttonId: '.citacao' , buttonText: {displayText: 'Próxima ⏭️'}, type: 1}
  ]
  const buttonMessage = {
    contentText: `“${pickRandom(global.bucin)}”`,
    footerText: 'Sapphire Network',
    buttons: buttons,
    headerType: 1

  }
  conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
  //conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['citacao']
handler.tags = ['quotes']
handler.command = /^(citacao)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
  "Imagine uma nova história para sua vida e acredite nela.",
  "A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.",
  "Ser feliz sem motivo é a mais autêntica forma de felicidade.",
  "A sabedoria começa na reflexão.",
  "O homem superior atribui a culpa a si próprio; o homem comum, aos outros.",
  "A vida é muito importante para ser levada a sério.",
  "O remorso é a única dor da alma, que nem a reflexão nem o tempo atenuam.",
  "Uma vida sem desafios não vale a pena ser vivida.",
  "Ainda não vi ninguém que ame a virtude tanto quanto ama a beleza do corpo.",
  "Vós, que sofreis, porque amais, amai ainda mais. Morrer de amor é viver dele.",
  "Faça o que for necessário para ser feliz. Mas não se esqueça que a felicidade é um sentimento simples, você pode encontrá-la e deixá-la ir embora por não perceber sua simplicidade.",
  "Pessimismo leva à fraqueza, otimismo ao poder.",
  "Perder tempo em aprender coisas que não interessam priva-nos de descobrir coisas interessantes.",
  "É bem difícil descobrir o que gera a felicidade; pobreza e riqueza falharam nisso.",
  "Desconfie do destino e acredite em você. Gaste mais horas realizando que sonhando, fazendo que planejando, vivendo que esperando porque, embora quem quase morre esteja vivo, quem quase vive já morreu.",
  "Não permito que nenhuma reflexão filosófica me tire a alegria das coisas simples da vida.",
  "A alegria de fazer o bem é a única felicidade verdadeira.",
  "Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade.",
  "Não espere por uma crise para descobrir o que é importante em sua vida.",
  "Não existe um caminho para a felicidade. A felicidade é o caminho."
]
