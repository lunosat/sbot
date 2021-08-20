let { MessageType } = require('@adiwajshing/baileys')
let handler = m => m
handler.before = async function (m) {
  if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
  let id = m.chat
  if (!m.quoted || m.quoted.sender != this.user.jid || !/^Qual é o resultado de/i.test(m.quoted.text)) return !0
  this.math = this.math ? this.math : {}
  if (!(id in this.math)) return m.reply('O assunto terminou')
  if (m.quoted.id == this.math[id][0].id) {
    let math = JSON.parse(JSON.stringify(this.math[id][1]))
    if (m.text == math.result) {
      global.db.data.users[m.sender].exp += math.bonus
      clearTimeout(this.math[id][3])
      delete this.math[id]
      //list
      const rows = [
        {title: 'Noob', description: ' ', rowId: '!mat noob'},
        {title: 'Fácil', description: ' ', rowId: '!mat facil'},
        {title: 'Médio', description: ' ', rowid: '!mat medio'},
        {title: 'Difícil', description: ' ', rowid: '!mat dificil'},
        {title: 'Extremo', description: ' ', rowid: '!mat extremo'},
        {title: 'Impossível', description: ' ', rowid: '!mat impossivel'},
        {title: 'Impossível 2', description: ' ', rowid: '!mat impossivel2'}
      ]
      const sections = [{title: 'Nível de dificuldade', rows: rows}]

      const button = {
        buttonText: 'Jogar novamente',
        description: `*Resposta correta!*\n\n+${math.bonus} XP`,
        sections: sections,
        listType: 1
      }
      conn.sendMessage(m.chat, button, MessageType.listMessage)
      
    } else {
      if (--this.math[id][2] == 0) {
        clearTimeout(this.math[id][3])
        delete this.math[id]
        const rows = [
          {title: 'Noob', description: ' ', rowId: '!mat noob'},
          {title: 'Fácil', description: ' ', rowId: '!mat facil'},
          {title: 'Médio', description: ' ', rowid: '!mat medio'},
          {title: 'Difícil', description: ' ', rowid: '!mat dificil'},
          {title: 'Extremo', description: ' ', rowid: '!mat extremo'},
          {title: 'Impossível', description: ' ', rowid: '!mat impossivel'},
          {title: 'Impossível 2', description: ' ', rowid: '!mat impossivel2'}
        ]
        const sections = [{title: 'Nível de dificuldade', rows: rows}]
  
        const button = {
          buttonText: 'Jogar novamente',
          description: `*A oportunidade se foi!*\n\nResposta: *${math.result}*`,
          sections: sections,
          listType: 1
        }
        conn.sendMessage(m.chat, button, MessageType.listMessage)
        //m.reply(`*A oportunidade se foi!*\nResposta: *${math.result}*`)
      } else m.reply(`*Resposta incorreta!*\nVocê ainda tem ${this.math[id][2]} chances`)
    }
  }
  return !0
}

module.exports = handler