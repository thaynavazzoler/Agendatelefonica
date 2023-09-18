//Primeiro coloca uma class e da um nome para ela com a primeira letra maiúscula
//No constructor é colocado todos inputs que existem
//depois disso colocamos o this e coloca como igual ao nome do input
class Contact {
    constructor(name, phone, cell, foto, birthdate, email, cep, cidade, instagram, gitHub) {
        this.name = name;
        this.phone = phone;
        this.cell = cell;
        this.foto = foto;
        this.birthdate = birthdate;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.instagram = instagram;
        this.gitHub = gitHub;
         this.zodiacSign = this.getZodiacSign();
         this.age = this. calculateAge(birthdate);
         this.id = this.generateId();
    }
//Depois foi criado essa função de signo, que pega o dia do nascimento do usuário e o mês para saber em qual signo que se encaixa
//Exemplo: para isso foi usado o if(se) mês for igual a um e menor, igula a 20, se encaixa no signo de capricórni
    getZodiacSign() {
        let birthDate = new Date(this.birthdate);
        let month = birthDate.getMonth() + 1;
        let day = birthDate.getDate();
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Cancer";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário";
        }
    }
//Calcula idade, pegando o dia que nasceu, o ano atual, mês do nasimento e o mês atual, e assim fazemos uma subtração para saber a idade
//novaemnte foi usado o if(se), else if(senão se) e else(outra(o))
//se a data de nascimento for maior que a data do ano atual, retorna a idade -
    calculateAge(birthdate) {
        const  birth = new Date (birthdate).getFullYear();
        const currentYear = new Date ().getFullYear();
        const birthMonth = new Date(birthdate).getMonth() + 1;
        const currentMonth = new Date().getMonth + 1;

        const age = currentYear - birth;
        if (birth > currentYear){
            return age - 1;
        }else if(birthMonth > currentMonth){
            return age - 1;
        }else{
            return age;
        }
        
    }
//cria números para o id
    generateId() {
        return Math.floor(Math.random() * 1000000000);
    }
}
// Essa class possui três métodos
//O método que verifica se todos os campos obrigatórios estão preenchidos
//O método que verifica se a imagem é png, jpg
//"getContactById(id)" recebe um "id" e retorna o objeto "contato"
//A última linha do código cria uma nova instância da classe,Essa instância pode ser usada para chamar os métodos da classe e manipular a matriz "contato".
class listContatos {
    constructor() {
        this.contacts = [];
    }
    adicionar(paremetro) {
        if (verificaInputs()) {
            envieMsg('Preencha todos os inputs','erro')
        }else if(!isURLValida(paremetro.foto)){
            envieMsg('URL invelida','erro')
        }else{
            envieMsg('Cadastro com sucesso', 'sucesso')
            this.contacts.push(paremetro);
        }
       
    }

    getContactById(id){
        return this.contacts.find((contact) => contact.id == id);
    }
}

//instância da lista de contatos
const bibiotecaDeContatos = new listContatos();
//Essa função pega todos os valores dos inputs do HTML, instância eles
// verifica se todos os campos obrigatórios estão preenchidos,
// depois são chamadas para atualizar a lista de contatos e exibir os detalhes do contato recém-adicionado.
function addContact() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let cell = document.getElementById("cell").value;
    let foto = document.getElementById("foto").value;
    let birthdate = document.getElementById("birthdate").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let instagram = document.getElementById("instagram").value;
    let gitHub = document.getElementById("gitHub").value;

    console.log(name);
    console.log(phone);
    console.log(cell);
    console.log(foto);
    console.log(birthdate);
    console.log(email);
    console.log(cep);
    console.log(cidade);
    console.log(instagram);
    console.log(gitHub);


    //intância do nosso contato (objeto)
    const newContatos = new Contact(name, phone, cell, foto, birthdate, email, cep, cidade, instagram,gitHub);

    bibiotecaDeContatos.adicionar(newContatos);
    console.log(bibiotecaDeContatos);

    LimparClean();
    renderizar()
}
//coloca os valores igual a nada para limpar
function verificaInputs(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let cell = document.getElementById("cell").value;
    let foto = document.getElementById("foto").value;
    let birthdate = document.getElementById("birthdate").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let instagram = document.getElementById("instagram").value;
    let gitHub = document.getElementById("gitHub").value;
   
    if(name == "" ||phone == "" ||cell== "" ||foto == "" ||birthdate == "" ||email == "" ||cep == "" ||cidade == "" ||instagram == "" ||gitHub == ""  ){
        console.log('os inputs estão vazios');
        return true;
    }else{
        console.log('os inputs estão preenchidos');
        return false;
    }
}
//exibe uma mensagem na tela, "msg" é a mensagem e "tipo mensagem" que é sucesso ou erro e depois de 3000 segundos desaparece a mensagem
function envieMsg(msg, tipoMsg) {

    let msgDiv = document.getElementById("error-msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
        <p class='${tipoMsg}'>${msg}</p>
    `

    msgDiv.innerHTML = msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000)
}

function isURLValida(foto) {
    if (foto.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {

        return false;
    }
}
//coloca os valores igual a nada para limpar
function LimparClean(){
    document.getElementById("name").value= "";
    document.getElementById("phone").value= "";
    document.getElementById("cell").value= "";
    document.getElementById("foto").value= "";
    document.getElementById("birthdate").value= "";
    document.getElementById("email").value= "";
    document.getElementById("cep").value= "";
    document.getElementById("cidade").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("gitHub").value= "";
}

// primeiro fica vazio e depois pega o que o usuário colocou no input e coloca para aparecer na tela
function renderizar(){
    const listHtml = document.getElementById("show-contact-list");
    listHtml.innerHTML = "";

    bibiotecaDeContatos.contacts.forEach(contact => {
        const contactDiv = `
        <div id="card" onclick ="renderizarConteudo(${contact.id})">
        <div class='contact-details' >
        <img class="imageCard" src="${contact.foto}" alt="${contact.name}"/>
        <p><strong>${contact.name}</strong></p>
            <p><strong>Telefone Fixo:</strong>${separingTellphone(contact.phone)}</p>
            <p><strong>Telefone Celular:</strong> ${separingCellphone(contact.cell)}</p>
        </div>
        </div>
        `

        listHtml.innerHTML += contactDiv
    });
}
function separingTellphone(phone) {
    const arrTell = phone.split("");
 
     arrTell.splice(4, 0, "-");
 
     return arrTell.join("");
 }
 
 function separingCellphone(cell) {
     const arrcell = cell.split("");
 
      arrcell.splice(0, 0, "(");
      arrcell.splice(3, 0, ")");
      arrcell.splice(4, 0, " ");
      arrcell.splice(10, 0, "-");
      //(00) 00000-0000
 
      return arrcell.join("");
  }
  function separingCEP(cep) {
    cep = cep.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    cep = cep.replace(/^(\d{5})(\d{3})$/, '$1-$2'); // Adiciona o traço
    return cep;
  }
 // função primeiro divide a cadeia de caracteres de data em uma matriz usando o método split() com um hífen como separador
//A matriz resultante contém três elementos: o ano, o mês e o dia, nessa ordem
// a função concatena os elementos da matriz na ordem desejada com barras entre elas
// A cadeia de caracteres resultante é então retornada
  function dateinPTBR(birthdate) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = birthdate.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}
   
//Faz aparecer tudo no navegador, ao lado, após apertar o último card, só que esse contém mais informações
  function renderizarConteudo(id) {
    let msg = '';
    let novoCont = bibiotecaDeContatos.getContactById(id);
   

       msg = `
       <div class='contatoDetalhe2'>
       <div id='div-contato1' >
        <img class="imageCard" src="${novoCont.foto}">
        <p><strong>${novoCont.name}</strong></p>
           <p>Indentificador: ${novoCont.id}</p>
           </div>
       <div id='div-contato' >
       
            <p>Celular:${separingCellphone(novoCont.cell)}</p>
           <p>Telefone:${separingTellphone(novoCont.phone)}</p>
            <p>Data de nascimento: ${dateinPTBR(novoCont.birthdate)}</p>
            <p>Idade: ${novoCont.age}</p>
            <p>Signo: ${novoCont.zodiacSign}</p>
            <p>Email: ${novoCont.email}</p>
           <p>CEP: ${separingCEP(novoCont.cep)}</p>
            <p>Cidade: ${novoCont.cidade}</p>
            <p>Instagram: @${novoCont.instagram}</p>
           <p>Github: ${novoCont.gitHub}</p>
        </div>
        `

        document.getElementById("contact-details").innerHTML= msg;
    };
   
