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
const family = document.getElementById('form2-2-1');
const materia = document.getElementsByClassName('subject');

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
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      const escolhida = family[index].value;
      console.log(escolhida);
      return escolhida;
    }
  }
};

const formInscrito = (event) => {
  event.preventDefault();
  formGeral.style.display = 'none';
  formData.innerText = `Nome: ${nome.value} ${lastName.value}
  \nEmail: ${emailForm.value}
  \nCasa: ${house.value}
  \n${selectedFamily()}
  \n${materia.value}`;
};

btnSubmit.addEventListener('click', formInscrito);
