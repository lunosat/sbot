let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*Já existe uma sala de ausência neste grupo!*_\n\n*${usedPrefix}delasentes* - para excluir a sala`
    }
    conn.absen[id] = [
        m.reply(`Sala de ausência criada com sucesso!\n\n*${usedPrefix}ausente* - ficar ausênte\n*${usedPrefix}verausentes* - para verificar\n*${usedPrefix}delausente* - para fechar a sala`),
        [],
        text
    ]
}
handler.help = ['causencia (motivo)']
handler.tags = ['ausen']
handler.command = /^(c|mulai)ausencia$/i
handler.group = true
handler.admin = true
module.exports = handler