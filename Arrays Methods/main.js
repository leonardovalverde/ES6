const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];


const newMap = usuarios.map(function(item){
    return item.idade;   
})

const newFilter = usuarios.filter(function(item){
    return item.idade > 18;
})

const newFind = usuarios.find(function(item){
    return item.empresa === 'google';
})


const newAge = usuarios.map(function(item){
    item.idade = item.idade*2;
    return item;
})
.filter(function(item){
    return item.idade < 50;
})


console.log(newMap);
console.log(newFilter);
console.log(newFind);
console.log(newAge);

