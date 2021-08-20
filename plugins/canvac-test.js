const canvacord = require("canvacord");
let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn,}) => {
    let pp = './src/avatar_contact.png'
    let bg = './src/bg_profile.jpg'
    user = global.db.data.users[m.sender]
    const rank = new canvacord.Rank()
    .setAvatar(pp)
    .setCurrentXP(user.exp)
    .setRequiredXP(user.exp)
    .setStatus("dnd")
    .setProgressBar(['#20b2aa', '#f08080'], "GRADIENT", true)
    .setUsername(user.name)
    .setRank(1, "a", false)
    .setDiscriminator("0007")
    .setBackground("IMAGE", bg);


    rank.build()
    .then(async data => {
        //canvacord.write(buffer, "RankCard.png");
        conn.sendFile(m.chat, data, 'rank.png', 'a', m)
    });
}
handler.command = ['canv']

module.exports = handler