"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var newMap = usuarios.map(function (item) {
  return item.idade;
});
var newFilter = usuarios.filter(function (item) {
  return item.idade > 18;
});
var newFind = usuarios.find(function (item) {
  return item.empresa === 'google';
});
var newAge = usuarios.map(function (item) {
  item.idade = item.idade * 2;
  return item;
}).filter(function (item) {
  return item.idade < 50;
});
console.log(newMap);
console.log(newFilter);
console.log(newFind);
console.log(newAge);
