const Cliente = require("./Obejetos/Cliente");
const Empresa = require("./Obejetos/Empresa");
const Endereco = require("./Obejetos/Endereco");
const Telefone = require("./Obejetos/Telefone");

const enderecoCr = new Endereco("SP", "Taubaté", "Rua Padre Conego", 666);
const telefoneCr1 = new Telefone(12, 12345678);
const telefoneCr2 = new Telefone(12, 87654321);
const empresaCr = new Empresa("CR conecta", "Telefonia Corporativa", "02.123.678/0001-01", enderecoCr);
empresaCr.definirTelefone = telefoneCr1;
empresaCr.definirTelefone = telefoneCr2;

const enderecoDaniel = new Endereco("SP", "Pindamonhangaba", "Rua João do Pulo", 999);
const telefoneDaniel1 = new Telefone(12, 23232424);
const telefoneDaniel2 = new Telefone(12, 51516969);
const clienteDaniel = new Cliente("Daniel", "333.444.555-66", enderecoDaniel);
clienteDaniel.definirTelefone = telefoneDaniel1;
clienteDaniel.definirTelefone = telefoneDaniel2;
empresaCr.definirCliente = clienteDaniel;

const enderecoCarol = new Endereco("SP", "Caçapava", "Rua Kitkat", 540);
const telefoneCarol1 = new Telefone(12, 22222222);
const telefoneCarol2 = new Telefone(12, 33333333);
const clienteCarol = new Cliente("Carol", "555.888.999.10", enderecoCarol);
clienteCarol.definirTelefone = telefoneCarol1;
clienteCarol.definirTelefone = telefoneCarol2;
empresaCr.definirCliente = clienteCarol;

const enderecoMaria = new Endereco("SP", "São josé dos Campos", "Rua Embraer", 157);
const telefoneMaria1 = new Telefone(12, 55559999);
const telefoneMaria2 = new Telefone(12, 45457878);
const clienteMaria = new Cliente("Maria", "678.555.432-90", enderecoMaria);
clienteMaria.definirTelefone = telefoneMaria1;
clienteMaria.definirTelefone = telefoneMaria2;
empresaCr.definirCliente = clienteMaria;

const enderecoRuth = new Endereco("SP", "Jacarei", "Rua dos jacarés", 2222);
