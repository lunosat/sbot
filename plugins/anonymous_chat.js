const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'proximo':
        case 'sair': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) throw 'Você não está no chat anônimo'
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) this.sendMessage(other, 'Seu parceiro saiu do chat', MessageType.text)
            delete this.anonymous[room.id]
            if (command === 'sair') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) throw 'Você ainda está no chat anônimo'
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                this.sendMessage(room.a, 'Parceiro encontrado!', MessageType.text)
                room.b = m.sender
                room.state = 'CHATTING'
                m.reply('Parceiro encontrado!')
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                m.reply('Procurando parceiro...')
            }
            break
        }
    }
}
handler.help = ['iniciar', 'sair', 'proximo']
handler.tags = 'anonymous'

handler.command = ['iniciar', 'sair', 'proximo']
handler.private = true

module.exports = handler
