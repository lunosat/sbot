let axios = require ('axios')
let handler = async(m, {conn, text}) => {
    let [txt1, txt2] = text.split("|")
    try{
        axios.get(`https://sapphire-api.herokuapp.com/api/textmaker?text=akira&text2=pika&theme=glitch&apikey=Alphabot`).then(res => {
            conn.sendFile(m.chat, res.data.result.url, 'glitch.jpg', 'By Oficial Sapphire API')
        })
    } catch (err) {
        console.log(err)
    }
}
handler.help = ['glitch (texto)-(texto)']
handler.tags = ['maker']
handler.command = ['glitch']

module.exports = handler
