const axios = require('axios')
let handler = async (m, {conn, text, usedPrefix}) => {
  if(!text) throw `*Uso:* ${usedPrefix}hentai (categoria)\n*Exemplo:* ${usedPrefix}hentai anal\n\n*Categorias:*\n_anal_\n_trap_\n_boobs_\nblowjob\nkuni\nspank\nclassic`
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
  if(text = 'boobs'){
    try {
        axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
        conn.sendFile(m.chat, res.data.url, 'anal.gif', `Eta `, m)
        });
    } catch (err) {
        console.log(err);
        throw(err);
    };
    return false
  }
  if(text = 'kuni'){
    try {
      axios.get(`https://nekos.life/api/v2/img/kuni`).then(res => {
      conn.sendFile(m.chat, res.data.url, 'anal.gif', `Eta `, m)
      });
  } catch (err) {
      console.log(err);
      throw(err);
  };
  return false
  }
  if(text = 'classic'){
    try {
        axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
        conn.sendFile(m.chat, res.data.url, 'anal.gif', `Eta `, m)
        });
    } catch (err) {
        console.log(err);
        throw(err);
  };
  return false
  }
  if(text = 'spank'){
    try {
        axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
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