const axios = require('axios')
let handler = async (m, {conn, text, usedPrefix}) => {
  if(!text) throw `*Uso:* ${usedPrefix}hentai (categoria)\n*Exemplo:* ${usedPrefix}hentai anal\n\n*Categorias:*\n_Anal_\nTrap`
  var cat = [
    'anal',
    'trap',
    'boobs',
    'blowjob',
    'kuni',
    'spank',
    'classic',
  ];
  if(text != cat) throw 'Categoria inexistente'
  if(text = 'anal'){
    try {
        axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
        conn.sendFile(m.chat, res.data.url, 'anal.gif', `Eta `, m)
        });
    } catch (err) {
        console.log(err);
        throw(err);
    };
  return false
  }
  if(text = 'trap'){
    try {
        axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
        conn.sendFile(m.chat, res.data.url, 'anal.gif', `Eta `, m)
        });
    } catch (err) {
        console.log(err);
        throw(err);
    };
  return false
  }
}
handler.command = /^hentai$/i

module.exports = handler