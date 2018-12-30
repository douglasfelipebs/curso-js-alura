var pacientes = document.querySelectorAll('.paciente');

function isPesoValido(peso) {
  if (peso <= 0 || peso >= 1000) {
    return false;
  }
  return true;
}

function isAlturaValida(altura) {
  if (altura <= 0 || altura >= 3) {
    return false;
  }
  return true;
}

function calculaImc (peso, altura){
  return (peso / (altura * altura)).toFixed(2);
};

for (var i = 0; i < pacientes.length; i++) {
  var peso = pacientes[i].querySelector('.info-peso').textContent;
  var altura = pacientes[i].querySelector('.info-altura').textContent;
  var imc = pacientes[i].querySelector('.info-imc');
  if (!isPesoValido(peso)) {
    imc.textContent = 'Peso Inválido';
    pacientes[i].classList.add("paciente-invalido");
  } else if (!isAlturaValida(altura)) {
    imc.textContent = 'Altura Inválida';
    pacientes[i].classList.add('paciente-invalido');
  } else {
    imc.textContent = calculaImc(peso, altura);
  }
}
