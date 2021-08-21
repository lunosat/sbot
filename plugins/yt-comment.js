let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', 'Aqui está seu comentário', m)
}

handler.help = ['ytcomment (comentário)']
handler.tags = ['maker']

handler.command = /^(ytcomment)$/i

handler.group = true

module.exports = handler
