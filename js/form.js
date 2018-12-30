
var btnAddPaciente = document.querySelector('#adicionar-paciente');

btnAddPaciente.addEventListener("click", () => {
  event.preventDefault();

  var form = document.querySelector('#form-adiciona');
  var oPaciente = getPacienteFromForm(form);

  var aErros = isPacienteInvalido(oPaciente);
  if(aErros.length > 0){
    exibirErros(aErros);
    return;
  }

  var trPaciente = criaTr(oPaciente);

  var tbPaciente = document.querySelector('#tabela-pacientes');
  tbPaciente.appendChild(trPaciente);

  form.reset();
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = '';

});

function getPacienteFromForm(form) {
  return {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
}

function criaTr(oPaciente){
  var trPaciente = document.createElement('tr');
  trPaciente.classList.add('paciente');

  var tdNome = criaTd('nome', oPaciente.nome);
  var tdPeso = criaTd('peso', oPaciente.peso);
  var tdAltura = criaTd('altura', oPaciente.altura);
  var tdGordura = criaTd('gordura', oPaciente.gordura);
  var tdImc = criaTd('imc', oPaciente.imc);

  trPaciente.appendChild(tdNome);
  trPaciente.appendChild(tdPeso);
  trPaciente.appendChild(tdAltura);
  trPaciente.appendChild(tdGordura);
  trPaciente.appendChild(tdImc);

  return trPaciente;
}

function criaTd(prop, val){
  var td = document.createElement('td');
  td.classList.add('info-' + prop);
  td.textContent = val;
  return td;
}

function isPacienteInvalido(oPaciente) {
  var aErros = [];
  if(oPaciente.nome.length === 0){
    aErros.push('Nome é obrigatório.');
  }
  if(!isPesoValido(oPaciente.peso)){
    aErros.push('Peso inválido.');
  }
  if(!isAlturaValida(oPaciente.altura)){
    aErros.push('Altura inválida.');
  }
  if(oPaciente.gordura.length === 0){
    aErros.push('% de Gordura é obrigatório.');
  }
  return aErros;
}

function exibirErros(aErros) {
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = '';
  aErros.forEach(function (erro) {
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  });
}