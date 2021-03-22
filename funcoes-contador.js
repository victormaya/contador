const numero__dias = document.querySelector(".numero__dias");
const numero__horas = document.querySelector(".numero__horas");
const numero__minutos = document.querySelector(".numero__minutos");
const numero__segundos = document.querySelector(".numero__segundos");
const reiniciar = document.querySelector('.reiniciar')
let horas = 23;
let minutos = 59;
let segundos = 60;

function queryString(parameter) {  
  var loc = location.search.substring(1, location.search.length);   
  var param_value = false;   
  var params = loc.split("&");   
  for (i=0; i<params.length;i++) {   
      param_name = params[i].substring(0,params[i].indexOf('='));   
      if (param_name == parameter) {                                          
          param_value = params[i].substring(params[i].indexOf('=')+1)   
      }   
  }   
  if (param_value) {   
      return param_value;   
  }   
  else {   
      return undefined;   
  }   
}

let dias = queryString("parametro");

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

    numero__dias.innerHTML = dias;
    numero__horas.innerHTML = horas;
    numero__minutos.innerHTML = minutos;
    numero__segundos.innerHTML = segundos;

    setTimeout(relogio, 1000);
  } else {
    dias = 0;
    horas = 0;
    minutos = 0;
    segunsos = 0;
    numero__dias.innerHTML = dias;
    numero__horas.innerHTML = horas;
    numero__minutos.innerHTML = minutos;
    numero__segundos.innerHTML = segundos;
  }
}

relogio();

const inicio = () => {
  window.location.href = `./index.html`;
}


reiniciar.addEventListener('click', inicio)