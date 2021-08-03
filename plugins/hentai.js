const axios = require('axios')
let handler = async (m, {conn, text, usedPrefix}) => {
  cat = text
  if(!text) throw `*Uso:* ${usedPrefix}hentai (categoria)\n*Exemplo:* ${usedPrefix}hentai anal\n\n*Categorias:*\n_anal_\n_trap_\n_boobs_\n_blowjob_\n_kuni_\n_spank_\n_classic_`
  if(cat === 'anal'){
    try {
        axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
        conn.sendFile(m.chat, res.data.url, 'anal.gif', `Na mosca `, m)
        });
    } catch (err) {
        console.log(err);
        throw(err);
    };
  return false
  }
  else if(cat === 'trap'){
    try {
        axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
        conn.sendFile(m.chat, res.data.url, 'trap.gif', `Trabequin `, m)
        });
    } catch (err) {
        console.log(err);
        throw(err);
    };
  return false
  }
  else if(cat === 'boobs'){
    try {
        axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
        conn.sendFile(m.chat, res.data.url, 'boobs.gif', `Deve ser fofin `, m)
        });
    } catch (err) {
        console.log(err);
        throw(err);
    };
    return false
  }
  else if(cat === 'kuni'){
    try {
      axios.get(`https://nekos.life/api/v2/img/kuni`).then(res => {
      conn.sendFile(m.chat, res.data.url, 'kuni.gif', `Saboroso `, m)
      });
  } catch (err) {
      console.log(err);
      throw(err);
  };
  return false
  }
  else if(cat === 'classic'){
    try {
        axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
        conn.sendFile(m.chat, res.data.url, 'classic.gif', `Cultura `, m)
        });
    } catch (err) {
        console.log(err);
        throw(err);
  };
  return false
  }
  else if(cat === 'spank'){
    try {
        axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
        conn.sendFile(m.chat, res.data.url, 'spank.gif', `Ainnn `, m)
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