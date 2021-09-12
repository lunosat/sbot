let handler = async(m, { conn, text }) => {
  if(!text){
    m.reply(`*Suporte 👩‍💻*

_Siga o formato para receber ajuda:_
  
!sup (Mensagem)
  
*Por exemplo:* !sup Necessito de ajuda com tal comando.
  
_Iremos responder o mais breve possível com a solução para seu problema._`)
return
  }
  if (text.length > 300) throw 'Seja mais breve, utilize no máximo 300 caracteres.'
  const laporan = `*SUPORTE*\n\nNúmero : wa.me/${m.sender.split`@`[0]}\n\nDescrição: ${text}\n\nResponderemos o mais breve possível`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '5511973584242@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) 
    m.reply('_Serviço de suporte iniciado, responderemos o mais breve possível._')
  
}
handler.help = ['suporte']
handler.tags = ['info']

handler.command = /^(suporte|supxc)$/i

module.exports = handler
