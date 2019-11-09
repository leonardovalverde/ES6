import axios from 'axios';
//REMOVA O COMENTÁRIO PARA TESTAR A PARTE DO CODIGO QUE QUISER

/*
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo(){
    await delay(console.log('1seg'));
    await delay(console.log('2seg'));
    await delay(console.log('3seg'));
}


umPorSegundo();
*/

//AXIOS USUÁRIO

/*
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
    
        console.log(response);
    }   catch (err){
        console.warn('usuario não existe');
    }
}
   getUserFromGithub('diego3g');
   getUserFromGithub('diego3g124123');
*/

//AXIOS REPOSITÓRIO

/*
class Github {
    static async getRepositories(repo) {
        try {    
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);
    }       catch(err) {
            console.warn('Repositório não existe');
            }
    }
}
   
   Github.getRepositories('leonardovalverde/dom-skills');
   Github.getRepositories('rocketseat/dslkvmskv');
   */

    const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
    
        console.log(response.data);
    }   catch (err){
        console.warn('usuario não existe');
    }
}
    buscaUsuario('diego3g');
