const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btn-login');
const btnSubmit = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const contadorPRO = document.getElementById('counter');
const formData = document.getElementById('form-data');
const formGeral = document.getElementById('evaluation-form');
const nome = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.querySelectorAll('input[name="family"]');
const materia = document.querySelectorAll('input[name="subject"]');
const nota = document.querySelectorAll('input[name="rate"]');

const validaLogin = () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
};
btnLogin.addEventListener('click', validaLogin);

const validaForm = () => {
  if (agree.checked) {
    btnSubmit.disabled = false;
  }
};
agree.addEventListener('change', validaForm);

textarea.addEventListener('input', () => {
  let counter = 500;
  counter -= (textarea.value.length);
  contadorPRO.innerText = counter;
});

const selectedFamily = () => {
  let escolhida = '';
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      escolhida = family[index].value;
    }
  }
  return escolhida;
};

const checkedMaterias = () => {
  const escolhida = [];
  for (let index = 0; index < materia.length; index += 1) {
    if (materia[index].checked) {
      escolhida.push(materia[index].value);
    }
    console.log(escolhida);
  }
  return escolhida.join(', ');
};

const selectedNota = () => {
  let escolhida = '';
  for (let index = 0; index < nota.length; index += 1) {
    if (nota[index].checked) {
      escolhida = nota[index].value;
    }
  }
  return escolhida;
};

const formInscrito = (event) => {
  event.preventDefault();
  formGeral.style.display = 'none';
  formData.innerText = `Nome: ${nome.value} ${lastName.value}
  \nEmail: ${emailForm.value}
  \nCasa: ${house.value}
  \nFamília: ${selectedFamily()}
  \nMatérias: ${checkedMaterias()}
  \nAvaliação: ${selectedNota()}
  \nObservações: ${textarea.value}`;
};

btnSubmit.addEventListener('click', formInscrito);
