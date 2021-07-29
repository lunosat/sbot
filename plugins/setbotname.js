// NurNurz
let handler = async (m, { conn, text }) => {
   if (!text) throw `Digite um novo nickname para o Bot`
     try {
        await conn.updateProfileName(text)
        conn.reply(m.chat, 'Nickname atualizado com sucesso.', m)
     } catch (e) {
       console.log(e)
       throw `Erro`
     }
}
handler.help = ['setbotnick']
handler.tags = ['owner']
handler.command = /^(setbotnick)$/i
handler.owner = true

module.exports = handler
