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

// Função auxiliar para preencher dois dígitos
function setDoisDigitos(el1, el2, valor) {
  const str = valor.toString().padStart(2, "0");
  el1.innerText = str[0];
  el2.innerText = str[1];
}

// Função principal
function atualizarContador() {
  const agora = new Date();

  // Data alvo: 29/08/2025 às 02:55
  const dataAlvo = new Date(2025, 7, 29, 2, 55, 0); // Mês 7 = Agosto (0-based)

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

  // Calcular diferença dos Meses, Dias, Horas, Minutos e Segundos
  const totalSegundos = Math.floor(diffMs / 1000);
  const segundos = totalSegundos % 60;
  const minutos = Math.floor(totalSegundos / 60) % 60;
  const horas = Math.floor(totalSegundos / 3600) % 24;

  // Para calcular dias e meses de forma precisa:
  const atual = new Date(
    agora.getFullYear(),
    agora.getMonth(),
    agora.getDate()
  );
  const alvo = new Date(
    dataAlvo.getFullYear(),
    dataAlvo.getMonth(),
    dataAlvo.getDate()
  );

  let diffDiasTotais = Math.floor((alvo - atual) / (1000 * 60 * 60 * 24));
  let diffMeses =
    dataAlvo.getMonth() -
    agora.getMonth() +
    12 * (dataAlvo.getFullYear() - agora.getFullYear());

  // Corrige caso o dia do mês atual ainda não tenha sido atingido
  if (agora.getDate() > dataAlvo.getDate()) {
    diffMeses -= 1;
  }

  const diasRestantes = diffDiasTotais - diffMeses * 30;

  // Atualiza HTML
  setDoisDigitos(mes1, mes2, diffMeses);
  setDoisDigitos(dia1, dia2, diasRestantes);
  setDoisDigitos(hora1, hora2, horas);
  setDoisDigitos(minuto1, minuto2, minutos);
  setDoisDigitos(segundo1, segundo2, segundos);
}

const intervalo = setInterval(atualizarContador, 1000);
atualizarContador();
