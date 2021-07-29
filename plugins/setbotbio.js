// NurNurz
let handler = async (m, { conn, text }) => {
   if (!text) throw `Digite o texto para a nova biografia do Bot.`
     try {
        await conn.setStatus(text)
        conn.reply(m.chat, 'Biografia atualizada com sucesso.', m)
     } catch (e) {
       console.log(e)
       throw `Erro`
     }
}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^(setbotbio)$/i
handler.owner = true

module.exports = handler
