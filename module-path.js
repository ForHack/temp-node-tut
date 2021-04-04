const path = require('path')

// console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')

const base = path.basename(filePath)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute);

console.log('Название файла: ', path.basename(__filename))
console.log('Имя Директории: ', path.dirname(__filename))
console.log('Расширение файла:  ', path.extname(__filename))
console.log('Parse:  ', path.parse(__filename))

console.log(path.join(__dirname, 'server', 'index.html'))