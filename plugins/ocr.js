const Tesseract = require('tesseract.js')
let handler = async (m, {conn}) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)){
        let img = await q.download()
        Tesseract.recognize(img, 'eng', {logger: m => console.log(m)}).then(({data: { text }}) => {
            m.reply(text)
        })
    }
}
handler.command = ['ocr']

module.exports = handler
