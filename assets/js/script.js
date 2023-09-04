class Agenda{
    constructor(nome,telefonefixo, telefonecel, foto, datanascimento, email, cep, cidade, instagram, github){
        this.nome = nome;
        this.telefonefixo = telefonefixo;
        this.telefonecel = telefonecel;
        this.foto = foto;
        this.datanascimento = datanascimento;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.instagram = instagram;
        this.github = github;
        this.idade = this.calculateAge(datanascimento);
        this.ZodiacSign = this.getZodiacSign();
        
    }
    
    getZodiacSign() {
        let datanascimento = new Date(this.datanascimento);
        let day = datanascimento.getDate();
        let month = datanascimento.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");
    
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
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

function verificarInputs(){
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
}else if(!isURLValida(foto)){
    envieMsg("url invalida")
    return true;
}else{
    console.log("Campos preenchidos com sucesso");
    envieMsg('Cadastrado com sucesso', 'sucesso')
    return false;
}

}

function envieMsg(msg, tipoMsg) {
    let cadastroDiv = document.getElementById("msg")
    cadastroDiv.innerHTML = '';

    let msgParaTela = `
    <p class='${tipoMsg}'> ${msg}<p>
    `
    cadastroDiv.innerHTML = msgParaTela

    setTimeout(function () {
        cadastroDiv.innerHTML = '';
    }, 3000)
}
//modifica
function comporAgenda(){
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

    const agenda = new Agenda(nome, telefonefixo, telefonecel, foto, datanascimento, email, cep, cidade, instagram, github);
console.log(agenda)

    console.log(agenda);
    bibliotecaAgenda.adicionar(agenda);
/*     console.log(bibliotecaCadastro);*/
renderizarConteudo(); 

}

class ListaAgenda {
    constructor() {
        this.listaAgendaArray = [];

    }

    adicionar(parametro) {

        if (verificarInputs() == false && isURLValida(parametro.foto)== true) {
            this.listaAgendaArray.push(parametro);
            LimparInputs();
        }
    }
}
const bibliotecaAgenda = new ListaAgenda();
console.log(bibliotecaAgenda);

function LimparInputs() {
    document.getElementById("input-nome").value = "";
    document.getElementById("input-telefonefixo").value = "";
    document.getElementById("input-telefonecel").value = "";
    document.getElementById("input-URL").value = "";
    document.getElementById("input-nascimento").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-cep").value = "";
    document.getElementById("input-cidade").value = "";
    document.getElementById("input-instagram").value = "";
    document.getElementById("input-git").value = "";
}

//console.clear();

function renderizarConteudo() {
    const listaHTML = document.getElementById("container-lista");
    listaHTML.innerHTML="";

   const array = bibliotecaAgenda.listaAgendaArray;

    array.forEach(agenda => {
        const agendaDiv = `
        <div class='contatoDetalhe' onclick="comportudo()">
        <p>nome: ${agenda.nome}</p>
        <p>telefone fixo: ${agenda.telefonefixo}</p>
        <p>telefone celular: ${agenda.telefonecel}</p>
        <img src="${agenda.foto}"alt="${agenda.nome}">


   
        </div>
        `
        listaHTML.innerHTML += agendaDiv;
    });
}       /* <p> Idade : ${agenda.idade} mês: ${agenda.mes}.</p>
<p> Signo: ${agenda.getZodiacSign}</p>*/

function isURLValida(foto) {
    if(foto.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}


function comportudo(){
    let result = '';

result =`
    <div>
    <p>nome: ${this.nome}</p>
    <p>telefone fixo: ${agenda.telefonefixo}</p>
    <p>telefone celular: ${agenda.telefonecel}</p>
    <img src="${agenda.foto}"alt="${agenda.nome}">
    <p>Nascimento: ${agenda.datanascimento}</p>
    <p>email: ${agenda.email}</p>
    <p>cep: ${agenda.cep}</p>
    <p>cidade: ${agenda.cidade}</p>
    <p>instagram: ${agenda.instagram}</p>
    <p>Github: ${agenda.github}</p>
    </div>
    `
    document.getElementById("container-lista").innerHTML = result;
}
