const axios = require('axios')
let handler = async (m, {conn, text, usedPrefix}) => {
    cat = text
    if(!text) throw `_*Uso:* ${usedPrefix}hentai (categoria)\n*Exemplo:* ${usedPrefix}hentai anal\n\n*Categorias:*\n_anal_\n_trap_\n_boobs_\n_blowjob_\n_kuni_\n_spank_\n_classic_\n_solog_\n_feet_\n_lewdkemo_\n_solo_\n_cum_`
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

module.exports = handler