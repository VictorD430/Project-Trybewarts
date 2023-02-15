const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnSubmit = document.getElementById('btn-submit');

const validaForm = () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
};

btnSubmit.addEventListener('click', validaForm);
