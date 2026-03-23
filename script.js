const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

window.onload = () => {
  setTimeout(() => {
    if (localStorage.getItem('logado') && localStorage.getItem('role')) {
      showScreen('menu'); // ou 'responsavel' dependendo do role
    } else {
      showScreen('auth');
    }
  }, 5000); // splash some após 5s
};

document.getElementById('btnRegistrar').onclick = () => {
  const email = document.getElementById('email').value.trim();
  const senha = document.get
