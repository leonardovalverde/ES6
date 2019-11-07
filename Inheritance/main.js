class Usuario{
    constructor(usuario, senha,){
        this.usuario = usuario;
        this.senha = senha;
        this.admin = false;

    }
    isAdmin(){
        return this.usuario + ' ' + this.senha + ' ' + this.admin;
    }
}

class Admin extends Usuario{
    constructor(usuario, senha){
        super(usuario, senha); 
        this.admin = true;   
        
        
    }
    isAdmin(){
        return this.usuario + ' ' + this.senha + ' ' + this.admin;
    }
}




const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');


console.log(User1.isAdmin()) // false

console.log(Adm1.isAdmin()) // true
