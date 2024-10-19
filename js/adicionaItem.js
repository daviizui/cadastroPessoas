const nome = document.querySelector('#name');
const dataNacimento = document.querySelector('#birth-date');
const salvarForm = document.querySelector('#form');
const table = document.querySelector(".tabela");

 
const pessoas = JSON.parse(localStorage.getItem("pessoas")) || []

function criarNovaPessoa(pessoa){

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

salvarForm.addEventListener("submit", enviarDadosIniciais);

function enviarDadosIniciais(e) {
    e.preventDefault()
    
    const pessoinha = {
        nomeDigitado: nome.value,
        dataNacimentoDigitada: dataNacimento.value 
    }

    pessoas.push(pessoinha);
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    criaLinhaNaTabela(pessoinha);
    
    nome.value = ''
    dataNacimento.value = ''
}

pessoas.forEach(pessoa => {
    criaLinhaNaTabela(pessoa);
});

function criaLinhaNaTabela(umaPessoa){
    const elementoPessoa = criarNovaPessoa(umaPessoa);
    table.append(elementoPessoa);
}