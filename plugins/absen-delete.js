let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Não há ausências neste grupo!*_\n\n*${usedPrefix}causencia* - para criar uma sala`
    delete conn.absen[id]
    m.reply(`Pronto!`)
}
handler.help = ['DelAusentes']
handler.tags = ['absen']
handler.command = /^(del|hapus)ausentes$/i
handler.group = true
handler.admin = true
module.exports = handler