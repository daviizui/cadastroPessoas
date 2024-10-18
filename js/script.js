const nome = document.querySelector('#name');
const dataNacimento = document.querySelector('#birth-date');
const salvarForm = document.querySelector('#form')
 


const pessoas = []


salvarForm.addEventListener("submit", enviarDadosIniciais);

function enviarDadosIniciais(e) {
   e.preventDefault()
   nomeDigitado = nome.value
   dataNacimentoDigitada = dataNacimento.value
   
   // Transforma data digitada para validação do formato DD/MM/AAAA
    let dataDigitadaArray = dataNacimentoDigitada.split("-");
    let dataOrdenada = dataDigitadaArray[2] + "/" + dataDigitadaArray[1] + "/" + dataDigitadaArray[0]
    console.log(dataOrdenada);
    // Expressão regular para validar formato DD/MM/AAAA 
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    //Testa a data digitada e compara com os requisitos
   if (!dateRegex.test(dataOrdenada)) {
       alert('Data de nascimento inválida. Por favor, insira no formato DD/MM/AAAA.');
       return;
   }

   //Separa a data digitada para capturar apenas o mês 
   const [day, month, year] = dataNacimentoDigitada.split('/');
   // Valida o range de meses
   if (month < 1 || month > 12) {
        alert('Mês inválido. Por favor, insira um mês entre 1 e 12.');
        return;
   }
   // Expressão regular para validar requisitos de Nome 
    const regexNome = /^[a-zA-Z\s]{3,120}$/
   //valida o nome digitado com o requisitos pré estabelecidos
    if (!regexNome.test(nomeDigitado)){
        alert("O nome precisa ter no mínimo 3 letras e no máximo 120 letras.Podendo conter letras, e não números.")
        return
    }
    
    //Não permite a viagem no tempo, impede colocar uma data de nacimento futura
    if (!validarData(dataNacimentoDigitada)) {
        alert("Não é permitido o cadastro de datas futuras.Escolha outra data.")
    }

    const pessoa = {
        nomeDigitado: nome.value,
        dataNacimentoDigitada: dataNacimento.value 
    }

    pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    
};

//Valida se a data digitada não é futura 
function validarData (dataNacimentoDigitada){
    const dataAtual = new Date();
    const dataInserida = new Date(dataNacimentoDigitada);
     return dataAtual >= dataInserida;
}



























