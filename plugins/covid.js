let fetch = require('node-fetch')
const axios = require('axios')
const { fetchJson, fetchText } = require('../lib/fetcher')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../lib/functions')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
	
	if(!text) return m.reply(`Sobre qual país deseja saber (nome em inglês)?`)
	var txt = text
	try {
		axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${txt}`).then(res => {
		infoip = `*Covid-19.*\n\n
		*País:* ${res.data.country}\n
		*Casos:* ${res.data.cases}\n
		*Casos hoje:* ${res.data.todayCases}\n
		*Mortes:* ${res.data.deaths}\n
		*Mortes hoje:* ${res.data.todayDeaths}\n
		*Recuperados:* ${res.data.recovered}\n
		*Ativos:* ${res.data.active}\n
		*Estado crítico:* ${res.data.critical}\n
		*Casos a cada 1 milhão:* ${res.data.casesPerOneMillion}\n
		*Mortes a cada 1 milhão:* ${res.data.deathsPerOneMillion}\n
		*Testes aplicados:* ${res.data.totalTests}\n
		*Testes aplicados a cada milhão:* ${res.data.testsPerOneMillion}\n`
		conn.sendMessage(m.chat, infoip, MessageType.text, {quoted: m})
        });
    } catch (err) {
        console.log(err);
        throw(err);
    };
  return false
}
handler.help = ['covid'].map(v => v + '(país em inglês)')
handler.tags = ['tools']
handler.command = /^covid$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
