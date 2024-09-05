const fs = require('fs')

const lerArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}

const escreverArqivo = (dados: any): void => {
    fs.writeFileSync('./bd.json', JSON.stringify(dados))
}

type Endereco = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}

type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco | null
}

const cadastrarUsuario = (dados: Usuario):Usuario => {
    const bd = lerArquivo() as Usuario[]

    bd.push(dados)

    escreverArqivo(dados)

    return dados
}

const listarUsuarios = (): Usuario[] => {
    return lerArquivo() as Usuario[]
}

const detalharUsuario = (cpf: string): Usuario => {
    const bd = lerArquivo() as Usuario[]
    const usuario = bd.find(usuario => {
        return usuario.cpf === cpf
    })

    if (!usuario) {
        throw new Error('Usuário não encontrado')
    }

    return usuario
}

const atualizarUsuario = (cpf: string, dados: Usuario): Usuario => {
    const bd = lerArquivo() as Usuario[]
    const usuario = bd.find(usuario => {
        return usuario.cpf === cpf
    })

    if (!usuario) {
        throw new Error('Usuário não encontrado')
    }

    Object.assign(usuario, dados)

    escreverArqivo(bd)

    return dados
}