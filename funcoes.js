const dataSelecionada = document.querySelector(".data");

const iniciar = document.querySelector(".iniciar");

const minDate = new Date();
const minAno = minDate.getFullYear();
const minMes = minDate.getMonth() + 1;
const minDia = minDate.getDate() + 1;

// document.querySelector(".data").min = `2021-03-19`;
if (minMes < 10) {
  document.querySelector(".data").min = `${minAno}-0${minMes}-${minDia}`;
} else {
  document.querySelector(".data").min = `${minAno}-${minMes}-${minDia}`;
}

function alerta() {
  const dataAtual = new Date(); // Data de hoje
  const dataSelect = new Date(dataSelecionada.value); // Outra data no passado
  const diferenca = dataSelect.getTime() - dataAtual.getTime(); // Subtrai uma data pela outra
  console.log(diferenca)
  if (diferenca > 0) {
    console.log('netrou no primeiro if')
    let dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    dias -= 1;
    if (dias < 0) {
      console.log('netrou no segundo if')
      window.alert("Coloque uma data válida");
      return;
    } else {
      console.log('netrou no segundo else')

      let horas = 23;
      let minutos = 59;
      let segundos = 60;
      function relogio() {
        if (dias > 0 || horas > 0 || minutos > 0 || segundos > 0) {
          if (segundos === 0) {
            if (minutos > 0) {
              segundos = 59;
              minutos -= 1;
            } else {
              if (horas > 0) {
                minutos = 59;
                horas -= 1;
              } else {
                if (dias > 0) {
                  horas = 23;
                  dias -= 1;
                } else {
                  horas = 0;
                  minutos = 0;
                  segundos = 0;
                }
              }
            }
          } else {
            segundos = segundos - 1;
          }

          console.log(dias, horas, minutos, segundos);

          setTimeout(relogio, 0.00001);
        } else {
          horas = 0;
          minutos = 0;
          segunsos = 0;
          console.log(dias, horas, minutos, segundos);
        }
      }
      relogio();
    }
  } else {
    console.log('netrou no primeiro else')

    window.alert("Coloque uma data válida");
    return;
  }
}

iniciar.addEventListener("click", alerta);
