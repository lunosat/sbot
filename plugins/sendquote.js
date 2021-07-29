async function handler(m) {
    if (!m.quoted) throw 'Marque a mensagem.'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'Está mensagem não é referente a nenhuma outra.!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i
module.exports = handler