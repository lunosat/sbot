const { MessageType } = require("@adiwajshing/baileys");
const { createSticker, StickerTypes } = require("wa-sticker-formatter");
let axios = require("axios");

let handler = async (m, { conn }) => {
	let res = await axios.get(
		API("https://no-api-key.com", "/api/v2/coin-flip")
	);
	if (res.status !== 200) throw await `${res.status} ${res.statusText}`;
	const sticker = await createSticker(res.data.gif, {
		type: StickerTypes.FULL,
		pack: global.packname,
		author: global.author,
	});
	await conn.sendMessage(m.chat, sticker, MessageType.sticker, {
		quoted: m,
		mimetype: "image/webp",
	});
	const head = await createSticker(res.data.image, {
		type: StickerTypes.FULL,
		pack: global.packname,
		author: global.author,
	});
	await conn.sendMessage(m.chat, head, MessageType.sticker, {
		quoted: m,
		mimetype: "image/webp",
	});
	if(res.data.coin === 'heads'){
        await m.reply('Cara')
    }
    else if(res.data.coin){
        await m.reply('Coroa')
    }
    //m.reply(res.data.coin);
};
handler.help = ["moeda"];
handler.tags = ["fun"];

handler.command = ['moeda']

module.exports = handler;