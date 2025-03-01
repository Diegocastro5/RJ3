class Empresa{
    rezaoSocial
    nomeFantasia
    #cnpj
    endereco

    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.endereco = endereco
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get pegarCnpj() {
        return this.#cnpj
    }

    get pegarRazaoSocial() {
        return this.razaoSocial
    }

    get pegarNomeFantasia() {
        return this.nomeFantasia
    }

    get pegarEndereco() {
        return this.endereco.detalhe()
    }

    get pegarTelefones() {
        const detalhe = []
              this.telefones.forEach(telefone => {
                detalhe.push(telefone.detalhe())
              })
              var separador = "\n"
              return detalhe.join(separador);
    }

    get pegarClientes() {
        const detalhe = []
             this.clientes.forEach(cliente => {
                detalhe.push(cliente.detalhe())
             })
             return detalhe.join("\n")
    }

    // ------------------------------------------------- //

    set definirTelefone(telefone) {
        this.telefones.add(telefone)
    }

    set definirCliente(cliente) {
        this.clientes.add(cliente)
    }

    // ------------------------------------------------- //

    razaoSocialMaiusculo() {
        return this.pegarRazaoSocial.toUpperCase()
    }

    razaoSocialMinusculo() {
        return this.pegarRazaoSocial.toLowercase()
    }

    nomeFantasiaMaiusculo() {
        return this.pegarNomeFantasia.toUpperCase()
    }

    nomeFantasiaMaiusculo() {
        return this.pegarNomeFantasia.toLowercase()
    }

    enderecoMaiusculo() {
        return this.pegarEndereco.toUpperCase()
    }

    enderecoMaiusculo() {
        return this.pegarEndereco.toLowercase()
    }

    telefonesMaiusculo() {
        return this.pegarTelefones.toUpperCase()
    }

    relefonesMinusculo() {
        return this.pegarTelefones.toLowerCase()
    }

    // -------------------------------------------------- //

    detalhe() {
        return "Razão Social: " + this.razaoSocialMaiusculo() + "\n"
             + "Nome fantasia: " + this.pegarNomeFantasia + "\n"
             + "------------------" + "\n"
             + this.pegarClientes
    }
    
}
module.exports = Empresa
