const axios = require('axios')
const imageToBase64 = require('image-to-base64');
let fetch = require("node-fetch")
let handler = async (m, {conn, text}) => {

  let res = await fetch('https://some-random-api.ml/img/cat')
  let json = await res.json()

  imageToBase64(json.link) // Image URL
  .then(
      (response) => {
        axios.post('http://192.95.46.251:3333/sendFile', {
          sessionName: "senzap", 
          number: `${text}`,
          base64Data: response, //hexadecimal
          fileName:"cat.jpg",
          caption: "SendZap v1.1 - Send IMG test" //optional  
        })
        .then(function (response) {
          m.reply('Mensagem enviada?');
        })
        .catch(function (error) {
          console.log(error);
        });
      }
  )
  .catch(
      (error) => {
          console.log(error); // Logs an error if there was one
      }
  )

    
    
    
}
handler.command = ['si']

module.exports = handler
