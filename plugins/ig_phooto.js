const Instagram = require('instagram-downloader')

async function handler(m, { conn, text}) {
    if(!text) throw '_Use este comando para baixar imagens do instagram._\n\n*Exemplo:* !igp https://www.instagram.com/p/CUQ6zgCN7A8/?utm_medium=copy_link'
    Instagram(`${text}`)
    .then(data => {
        const { entry_data: { PostPage } } = data
        return PostPage.map(post => post.graphql.shortcode_media)
    })
    .then(images =>  images.map(img =>
        conn.sendFile(m.chat, img.display_url , 'igp.png', `「 Instagram > Imagens 」\n\n*Descrição acessível:* ${img.accessibility_caption}`, m)))
}

handler.help = ['igp'].map(v => v + '(link)')
handler.tags = ['downloader']
handler.command = ['igp']

module.exports = handler
  