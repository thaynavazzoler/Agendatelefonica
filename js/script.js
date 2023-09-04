class Cadastro{
    constructor(nome,telefonefixo, telefonecel, foto, datanascimento, email, cep, cidade, instagram, github){
    let nome = document.getElementById("input-nome").value;
    let telefonefixo = document.getElementById("input-telefonefixo").value;
    let telefonecel = document.getElementById("input-telefonecel").value;
    let foto = document.getElementById("input-URL").value;
    let datanascimento = document.getElementById("input-nascimento").value;
    let email = document.getElementById("input-email").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let instagram = document.getElementById("input-instagram").value;
    let github = document.getElementById("input-git").value;

    }

    calculateAge(datanascimento) {
        const  nascimento = new Date (datanascimento).getFullYear();
        const anoAtual = new Date ().getFullYear();
        const nascimentoMes = new Date(datanascimento).getMonth() + 1;
        const mesAtual = new Date().getMonth + 1;

        const idade = anoAtual - nascimento;
        if (nascimento > anoAtual){
            return idade - 1;
        }else if(nascimentoMes > mesAtual){
            return idade - 1;
        }else{
            return idade;
        }
        
    }
}
function dateinPTBR(data) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = data.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}

/////////////////////


function adicionarContato(){
    let nome = document.getElementById("input-nome").value;
    let telefonefixo = document.getElementById("input-telefonefixo").value;
    let telefonecel = document.getElementById("input-telefonecel").value;
    let foto = document.getElementById("input-URL").value;
    let datanascimento = document.getElementById("input-nascimento").value;
    let email = document.getElementById("input-email").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let instagram = document.getElementById("input-instagram").value;
    let github = document.getElementById("input-git").value;

    console.log(nome);
    console.log(telefonefixo);
    console.log(telefonecel);
    console.log(foto);
    console.log(datanascimento);
    console.log(email);
    console.log( cep);
    console.log(cidade);
    console.log(instagram);
    console.log(github);


if(nome == "" || telefonefixo == "" || telefonecel == "" || foto == "" || datanascimento == "" || email == ""|| cep == ""|| cidade == ""|| instagram == ""|| github == ""){
    console.log("contém um ou mais campos vazios");
    envieMsg('Preencha todos os campos', 'erro')
    return true;
}else if(!isURLValida(fotinha)){
    envieMsg("url invalida")
    return true;
}else{
    console.log("Campos preenchidos com sucesso");
    envieMsg('Cadastrado com sucesso', 'sucesso')
    return false;
}

}
