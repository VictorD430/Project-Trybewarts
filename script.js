const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btn-login');
const btnSubmit = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const contadorPRO = document.getElementById('counter');

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

textarea.addEventListener('keypress', function(e) {
  const inputLength = textarea.value.length;
  const maxChars = 499;
  let contagem = maxChars - inputLength;
  contadorPRO.innerHTML = contagem + '/500';
});