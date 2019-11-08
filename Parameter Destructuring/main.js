const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

   function mostraInfo({nome, endereco: {cidade, estado}}){
    console.log(nome);
    console.log(cidade);
    console.log(estado);
   }

   mostraInfo(empresa);

//Desestruturação aplicada a parâmetros

function mostraInfo2({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
   }

 console.log(mostraInfo2({ nome: 'Diego', idade: 23 }));