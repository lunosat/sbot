const axios = require('axios')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, {conn, text, usedPrefix}) => {
    cat = text
    chat = global.db.data.chats[m.chat]
    if(chat.nsfw === false)
    {
        const buttons = [
            {buttonId: '.nsfw', buttonText: {displayText: 'Ativar modo NSFW'}, type: 1},
            {buttonId: '.what nsfw', buttonText: {displayText: 'O que é NSFW?'}, type: 1}
        ]
        const buttonMessage = {
            contentText: 'Este é um comando com conteúdo adulto, para utilizar ative o modo *NSFW* para este grupo.',
            footerText: 'Sapphire Network', 
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
        return
    }
    if(!text){
        const rows = [
            {title: 'Anal', description: "Hmmm, rosquinha", rowId:".hentai anal"},
            {title: 'Trap', description: "Travequinhos lindos", rowId:".hentai trap"},
            {title: 'Boobs', description: "Famosos airbags", rowId:".hentai boobs"},
            {title: 'Blowjob', description: "Com baba?", rowId:".hentai blowjob"},
            {title: 'Kuni', description: "Uma lingua por uma lingua", rowId:".hentai kuni"},
            {title: 'Spank', description: "Ainnn", rowId:".hentai spank"},
            {title: 'Classic', description: "Um classíco meu amigo", rowId:".hentai classic"},
            {title: 'Solo Girl', description: "Sozinhas porém felizes", rowId:".hentai solog"},
            {title: 'Feet', description: "Então né, pés...", rowId:".hentai feet"},
            {title: 'Lewdkemo', description: "Facça carinho com cuidado...", rowId:".hentai lewdkemo"},
            {title: 'Solo', description: "Solidão", rowId:".hentai solo"},
            {title: 'Cum', description: "Leitin", rowId:".hentai cum"}
        ]
       
        const sections = [{title: "Section 1", rows: rows}]
       
        const button = {
            buttonText: 'Lista de hentais',
            description: "Ums lista com variedade de hentais, escolha.",
            sections: sections,
            listType: 1
        }
        conn.sendMessage(m.chat, button, MessageType.listMessage)
        return 
    } //throw `_*Uso:* ${usedPrefix}hentai (categoria)\n*Exemplo:* ${usedPrefix}hentai anal\n\n*Categorias:*\n_anal_\n_trap_\n_boobs_\n_blowjob_\n_kuni_\n_spank_\n_classic_\n_solog_\n_feet_\n_lewdkemo_\n_solo_\n_cum_`
    try {
        axios.get(`https://nekos.life/api/v2/img/${cat}`).then(res => {
        conn.sendFile(m.chat, res.data.url, 'hentai.png', `Pra 2d não man...`, m)
        });
    } catch (err) {
        console.log(err);
        throw(err);
    };
    return false
}
handler.help = ['hentai (categoria)']
handler.tags = ['adult']
handler.command = /^hentai$/i

handler.group = true

module.exports = handler