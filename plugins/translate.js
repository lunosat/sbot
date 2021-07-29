const translate = require('translate-google-api')
const defaultLang = 'en'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `
Exemplo:
${usedPrefix + command} (idioma) (texto)
${usedPrefix + command} id your messages

Veriique os idiomas aceitos: https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        throw err
    } finally {
        m.reply(result[0])
    }

}
handler.help = ['traduzir'].map(v => v + ' (idioma) (texto))')
handler.tags = ['tools']
handler.command = /^(tr(aduzir)?)$/i
handler.limit = false
handler.fail = null
handler.exp = 0
module.exports = handler
