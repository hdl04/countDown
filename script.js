// Pegando todos os elementos por ID
const mes1 = document.getElementById("mes1");
const mes2 = document.getElementById("mes2");
const dia1 = document.getElementById("dia1");
const dia2 = document.getElementById("dia2");
const hora1 = document.getElementById("hora1");
const hora2 = document.getElementById("hora2");
const minuto1 = document.getElementById("minuto1");
const minuto2 = document.getElementById("minuto2");
const segundo1 = document.getElementById("segundo1");
const segundo2 = document.getElementById("segundo2");

function setDoisDigitos(el1, el2, valor) {
  const str = valor.toString().padStart(2, "0");
  el1.innerText = str[0];
  el2.innerText = str[1];
}

function atualizarContador() {
  const agora = new Date();

  const dataAlvo = new Date(2025, 7, 27, 2, 55, 0);

  const diffMs = dataAlvo - agora;

  if (diffMs <= 0) {
    clearInterval(intervalo);
    mes1.innerText = mes2.innerText = "0";
    dia1.innerText = dia2.innerText = "0";
    hora1.innerText = hora2.innerText = "0";
    minuto1.innerText = minuto2.innerText = "0";
    segundo1.innerText = segundo2.innerText = "0";
    return;
  }

  const totalSegundos = Math.floor(diffMs / 1000);
  const segundos = totalSegundos % 60;
  const minutos = Math.floor(totalSegundos / 60) % 60;
  const horas = Math.floor(totalSegundos / 3600) % 24;
  const dias = Math.floor(totalSegundos / 86400);

  const diffMeses = Math.floor(dias / 30);
  const diasRestantes = dias % 30;

  setDoisDigitos(mes1, mes2, diffMeses);
  setDoisDigitos(dia1, dia2, diasRestantes);
  setDoisDigitos(hora1, hora2, horas);
  setDoisDigitos(minuto1, minuto2, minutos);
  setDoisDigitos(segundo1, segundo2, segundos);
}

const intervalo = setInterval(atualizarContador, 1000);
atualizarContador();
