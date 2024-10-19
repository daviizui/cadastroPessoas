const nome = document.querySelector('#name');
const dataNacimento = document.querySelector('#birth-date');
const salvarForm = document.querySelector('#form')
const table = document.querySelector(".tabela");

const pessoas = JSON.parse(localStorage.getItem("pessoas")) || []

pessoas.forEach(pessoa => {
    criaLinhaNaTabela(pessoa);
});

salvarForm.addEventListener("submit", enviarDadosIniciais);

function enviarDadosIniciais(e) {
    e.preventDefault()
    const pessoinha = {
        nomeDigitado: nome.value,
        dataNacimentoDigitada: ordenarData(dataNacimento.value) 
    }
    
    validarnome(pessoinha.nomeDigitado);
    validarData(dataNacimento.value);

    pessoas.push(pessoinha);
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    criaLinhaNaTabela(pessoinha);

    nome.value = ''
    dataNacimento.value = ''

};

function validarnome(nome) {
    const regexNome = /^[a-zA-Z\s]{3,120}$/
    if (!regexNome.test(nome)) {
        alert("O nome precisa ter no mínimo 3 letras e no máximo 120 letras.Podendo conter letras, e não números.")
        return
    }
}

function validarData(dataNacimentoDigitada) {
    const dataAtual = new Date();
    const dataInserida = new Date(dataNacimentoDigitada);

    if (dataAtual <= dataInserida) {
        alert("Não é permitido o cadastro de datas futuras.Escolha outra data.")
    }
    
    const [day, month, year] = dataNacimentoDigitada.split('/');
    if (month < 1 || month > 12) {
        alert('Mês inválido. Por favor, insira um mês entre 1 e 12.');
    }
    return;
}

function ordenarData(dataDesordenada) {
    let dataDigitadaArray = dataDesordenada.split("-");
    let dataOrdenada = dataDigitadaArray[2] + "/" + dataDigitadaArray[1] + "/" + dataDigitadaArray[0]
    return dataOrdenada;
}

function criarNovaPessoa(pessoa) {

    const tr = document.createElement("tr");
    tr.classList.add("tabela-corpo");

    const tdNome = document.createElement("td");
    tdNome.classList.add("corpo-nome");
    tdNome.textContent = pessoa.nomeDigitado

    const tdData = document.createElement("td");
    tdData.classList.add("corpo-data");
    tdData.textContent = pessoa.dataNacimentoDigitada
    const tdAcoes = document.createElement("td")
    tdAcoes.classList.add("corpo-acoes")
    tdAcoes.textContent = "Editar"

    tr.appendChild(tdNome)
    tr.appendChild(tdData)
    tr.appendChild(tdAcoes)
    return tr
}

function criaLinhaNaTabela(umaPessoa) {
    const elementoPessoa = criarNovaPessoa(umaPessoa);
    table.append(elementoPessoa);
}



























