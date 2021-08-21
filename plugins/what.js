let handler = async (m, {conn, text}) => {
    if(text === 'nsfw'){
        m.reply('*Not safe for work*\n\n*NSFW* é uma abreviação do termo em inglês "Not safe for work" que signfica "Não seguro para o trabalho", é uma gíria utilizada na internet como uma indicação para conteúdos impróprios para serem visualizados em locais públicos ou no local de trabalho, assim como pornografia.\n\n*O que isso muda?*\n\nVocê poderá utilizar comandos pornográficos assim como o *!hentai* e qualquer outro com conteúdo adulto.')
    }
}
handler.command = ['what']
handler.group = true

module.exports = handler