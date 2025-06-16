let tamanhoSenha = 12;

function alterarTamanho(delta) {
const elemento = document.getElementById("numero-caracteres");
tamanhoSenha = Math.max(4, tamanhoSenha + delta);
elemento.textContent = tamanhoSenha;
}

function gerarSenha() {
const campoSenha = document.getElementById("campo-senha");

const incluirMaiusculo = document.getElementById("maiusculo").checked;
const incluirMinusculo = document.getElementById("minusculo").checked;
const incluirNumero = document.getElementById("numero").checked;
const incluirSimbolo = document.getElementById("simbolo").checked;

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%&*()_+-=[]{}";

let caracteres = "";
if (incluirMaiusculo) caracteres += letrasMaiusculas;
if (incluirMinusculo) caracteres += letrasMinusculas;
if (incluirNumero) caracteres += numeros;
if (incluirSimbolo) caracteres += simbolos;

if (!caracteres) {
campoSenha.value = "Selecione ao menos uma opção";
return;
}

let senha = "";
for (let i = 0; i < tamanhoSenha; i++) {
const index = Math.floor(Math.random() * caracteres.length);
senha += caracteres[index];
}

campoSenha.value = senha;
}