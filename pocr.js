const Tesseract = require('tesseract.js')
let img = './src/ocr.png'
Tesseract.recognize(img, 'eng').then(({data: { text }}) => {
    console.log(text)
})