"use strict";

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};

function mostraInfo(_ref) {
  var nome = _ref.nome,
      _ref$endereco = _ref.endereco,
      cidade = _ref$endereco.cidade,
      estado = _ref$endereco.estado;
  console.log(nome);
  console.log(cidade);
  console.log(estado);
}

mostraInfo(empresa); //Desestruturação aplicada a parâmetros

function mostraInfo2(_ref2) {
  var nome = _ref2.nome,
      idade = _ref2.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo2({
  nome: 'Diego',
  idade: 23
}));
