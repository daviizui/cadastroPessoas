const nome = document.querySelector('#name');
const dataNacimento = document.querySelector('#birth-date');
const salvarForm = document.querySelector('#form')
const table = document.querySelector(".tabela");


let pessoas = JSON.parse(localStorage.getItem("pessoas")) || []

atualizaTabela();

function salvaPessoa (e){
    e.preventDefault()
    if (true){
        const pessoinha = {
        nomeDigitado: nome.value,
        dataNacimentoDigitada: ordenarData(dataNacimento.value),
        date: dataNacimento.value 
       }
    } 
        const pessoinha = {
        nomeDigitado: nome.value,
        dataNacimentoDigitada: ordenarData(dataNacimento.value),
        date: dataNacimento.value 
       }

    criaPessoa(pessoinha);
    atualizaTabela();
};

function validacao(){
    return true;
};

function ordenarData(dataDesordenada) {
    let dataDigitadaArray = dataDesordenada.split("-");
    let dataOrdenada = dataDigitadaArray[2] + "/" + dataDigitadaArray[1] + "/" + dataDigitadaArray[0]
    return dataOrdenada;
};

function criaPessoa(pessoa){
    pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
};

function atualizaTabela(){
    limpaTabela();
    pessoas.forEach(pessoa => {
        criaLinha(pessoa);
    });
};

function criaLinha (pessoa){
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td>${pessoa.nomeDigitado}</td>
        <td>${pessoa.dataNacimentoDigitada}</td>
        <td>
            <button class="btn-editar">Editar</button>
            <button class="btn-deletar">Deletar</button>
        </td>    
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha);
    

};

function limpaTabela(){
    const rows = document.querySelectorAll('#tabela>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
};


function validarnome(nome) {
    const regexNome = /^[a-zA-Z\s]{3,120}$/
    if (!regexNome.test(nome)) {
        alert("O nome precisa ter no mínimo 3 letras e no máximo 120 letras.Podendo conter letras, e não números.")
        return false
    }
    console.log("qualquer coisa!");
    
    return true
};

function validarData(dataNacimentoDigitada) {
    const dataAtual = new Date();
    const dataInserida = new Date(dataNacimentoDigitada);

    if (dataAtual <= dataInserida) {
        alert("Não é permitido o cadastro de datas futuras.Escolha outra data.")
        return false
    }
    
    const [day, month, year] = dataNacimentoDigitada.split('/');
    if (month < 1 || month > 12) {
        alert('Mês inválido. Por favor, insira um mês entre 1 e 12.');
        return false
    }
    console.log("qualquer coisa!");
    return true;
};

function deletaPessoa(e){
   /* pessoas = pessoas.filter(pessoinha => pessoinha != pessoa);   
    table.removeChild(tr);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));*/
    console.log(e);
    
};

// Eventos

salvarForm.addEventListener("submit", salvaPessoa);

























/*
salvarForm.addEventListener("submit", enviarDadosIniciais);

function enviarDadosIniciais(e) {
    e.preventDefault();
    
    salvaPessoa();
      
    
    

    pessoas.push(pessoinha);
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    criaLinhaNaTabela(pessoinha);

    nome.value = ''
    dataNacimento.value = ''

};





function criarNovaPessoa(pessoa, index) {

    const tr = document.createElement("tr");
    tr.classList.add("tabela-corpo");
    tr.id = "item-lista"

    const tdNome = document.createElement("td");
    tdNome.classList.add("corpo-nome");
    tdNome.textContent = pessoa.nomeDigitado

    const tdData = document.createElement("td");
    tdData.classList.add("corpo-data");
    tdData.textContent = pessoa.dataNacimentoDigitada
    const tdAcoes = document.createElement("td");
    tdAcoes.classList.add("corpo-acoes");
    
    const editarBtn = document.createElement("button");
    editarBtn.addEventListener("click", (e) => abrirModal(pessoa, tr));
    editarBtn.addEventListener("click", (e) => modalEditar(pessoa, tr));
    editarBtn.textContent = "Editar";
    editarBtn.classList.add("btn-editar");
    editarBtn.id = `editar-${index}`;

    const deletarBtn  = document.createElement("button");
    deletarBtn.addEventListener("click", (e) => deletarPessoa(pessoa, tr));
    deletarBtn.textContent = "Deletar";
    deletarBtn.classList.add("btn-deletar");
    deletarBtn.id = `deletar-${index}`;
    tdAcoes.appendChild(editarBtn);
    tdAcoes.appendChild(deletarBtn);

    tr.appendChild(tdNome);
    tr.appendChild(tdData);
    tr.appendChild(tdAcoes);
    return tr;
};




function deletarPessoa(pessoa, tr){
    pessoas = pessoas.filter(pessoinha => pessoinha != pessoa);   
    table.removeChild(tr);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
};

function editarPessoa(pessoa, tr){
    e.preventDefault()
    const pessoinha = {
        nomeDigitado: nomeEditado.value,
        dataNacimentoDigitada: ordenarData(dataNacimentoEditada.value) 
    }
    
    validarnome(nome.value);
    validarData(dataNacimento.value);

    pessoa.nomeDigitado = nomeEditado.value;
    pessoa.dataNacimentoDigitada = ordenarData(dataNacimentoEditada.value);
    console.log(pessoas);
    
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    criaLinhaNaTabela(pessoinha);

    nomeEditado.value = ''
    dataNacimentoEditada.value = '' 

    

};

function modalEditar (pessoa,tr){
    confirmarBtn.addEventListener("submit", (e) => editarPessoa(pessoa, tr));
};

const modal = document.querySelector(".modal");
const fechaModalBtn = document.querySelector(".btn-close");
const confirmarBtn = document.getElementById("form-modal");
const nomeEditado = document.querySelector("#name-modal");
const dataNacimentoEditada = document.querySelector("#birth-date-modal");


function abrirModal(pessoa, tr) {
    modal.classList.remove("hidden");
    nomeEditado.value = pessoa.nomeDigitado;
    dataNacimentoEditada.value = pessoa.date;
       
};

function fecharModal(){
    modal.classList.add("hidden");
};

fechaModalBtn.addEventListener("click", fecharModal);*/



  
























