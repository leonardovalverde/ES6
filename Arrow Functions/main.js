const arr = [1, 2, 3, 4, 5];
const newMap = arr.map((item => item + 10));

console.log(newMap);


const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = () => usuario.idade;


console.log(mostraIdade());

const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
return { nome, idade };
}
mostraUsuario(nome, idade);

console.log()