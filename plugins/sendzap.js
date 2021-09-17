const axios = require('axios')
let handler = async (m, {conn, text}) => {

    axios.post('http://192.95.46.251:3333/sendText', {
        sessionName: "senzap", 
        number: `${text}`,
        text:"Sendzap V1 - Primeiro teste API"
      })
      .then(function (response) {
        m.reply('Mensagem enviada?');
      })
      .catch(function (error) {
        console.log(error);
      });
    
}
handler.command = ['sendzap']

module.exports = handler
