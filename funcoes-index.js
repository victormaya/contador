const dataSelecionada = document.querySelector(".data");
const iniciar = document.querySelector(".iniciar");
const numero__dias = document.querySelector(".numero__dias");
const numero__horas = document.querySelector(".numero__horas");
const numero__minutos = document.querySelector(".numero__minutos");
const numero__segundos = document.querySelector(".numero__segundos");

function alerta() {
  const dataAtual = new Date(); // Data de hoje
  const dataSelect = new Date(dataSelecionada.value); // Outra data no passado
  const diferenca = dataSelect.getTime() - dataAtual.getTime(); // Subtrai uma data pela outra

  if (diferenca > 0) {
    let dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    dias -= 1;
    if (dias < 0) {
      window.alert("Coloque uma data válida");
      return;
    } else {
      window.location.href = `./contador.html?parametro=${dias}`;
    }
  } else {
    window.alert("Coloque uma data válida");
    return;
  }
}

iniciar.addEventListener("click", alerta);
