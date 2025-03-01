class Cliente{
    nome
    #cpf
    endereco

    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get pegarNome(){
        return this.nome
    }
    get pegarCpf(){
        return this.#cpf
    }
    get pegarEndereco(){
        return this.endereco.detalhe()
    }
    get pegarTelefones(){
        const detalhe = []
        this.telefones.forEach(telefone => {
            detalhe.push(telefone.detalhe())
        })
        return detalhe.join("\n")
    }
    // --------------------------------------------------- //

    set definirTelefone(telefone){
        this.telefones.add(telefone)
    }

    // --------------------------------------------------- //
    
    nomeMaiusculo(){
        return this.pegarNome.toUpperCase()
    }

    nomeMinusculo() {
        return this.pegarNome.toLowerCase()
    }

    cpfMaiusculo() {
        return this.pegarCpf.toUpperCase()
    }

    cpfminusculo() {
        returnthis.pegarCpf.toLowerCase()
    }

    enderecoMaiuculo() {
        return this.pegarEndereco.toUpperCase()
    }

    enderecoMinusculo() {
        return this.pegarEndereco.toLowerCase()
    }

    telefonesMaiusculo() {
        return this.pegarTelefones.toUpperCase()
    }

    telefonesMinusculo() {
        return this.pegarTelefones.toLowerCase()
    }

    // ---------------------------------------------------- //

    detalhe() {
        return "Nome: " + this.pegarNome + "\n"
                + this.pegarEndereco + "\n"
                + this.pegarTelefones + "\n"
    }

}

module.exports = Cliente
