const nome = document.querySelector('#name');
const dataNacimento = document.querySelector('#birth-date');
const salvarForm = document.querySelector('#form')
const table = document.querySelector(".tabela")
 
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
    
    const pessoa = {
        nomeDigitado: nome.value,
        dataNacimentoDigitada: dataNacimento.value 
    }

    pessoas.push(pessoa);
    const elementoPessoa = criarNovaPessoa(pessoa)
    table.append(elementoPessoa)
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    textArea.value = ''// não funciona
}

pessoas.forEach(pessoa => {
    const elementoPessoa = criarNovaPessoa(pessoa)
    table.append(elementoPessoa)
});