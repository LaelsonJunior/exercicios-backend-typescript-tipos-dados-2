const fs = require('fs')

const lerArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}

const escreverArqivo = (dados: any): void => {
    fs.writeFileSync('./bd.json', JSON.stringify(dados))
}