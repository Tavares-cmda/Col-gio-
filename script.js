// "Banco" localStorage
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

// Splash 5s
window.onload = () => {
  setTimeout(() => {
    document.getElementById('splash').classList.remove('active');
    if (localStorage.getItem('logado')) {
      showApp();
    } else {
      document.getElementById('auth').classList.add('active');
    }
  }, 5000);
};

// Registro
document.getElementById('btnRegistrar').onclick = () => {
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  if (!email.endsWith('@escola.pr.gov.br')) {
    document.getElementById('msgAuth').textContent = 'Use email terminando em @escola.pr.gov.br';
    return;
  }
  if (senha.length < 6) {
    document.getElementById('msgAuth').textContent = 'Senha mínima: 6 caracteres';
    return;
  }

  usuarios[email] = senha;
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  document.getElementById('msgAuth').textContent = 'Conta criada! Faça login.';
};

// Login
document.getElementById('btnEntrar').onclick = () => {
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  if (usuarios[email] === senha) {
    localStorage.setItem('logado', email);
    document.getElementById('auth').classList.remove('active');
    document.getElementById('role').classList.add('active');
  } else {
    document.getElementById('msgAuth').textContent = 'Email ou senha incorretos';
  }
};

// Role
function setRole(role) {
  localStorage.setItem('role', role);
  document.getElementById('role').classList.remove('active');
  showApp();
}

function showApp() {
  const role = localStorage.getItem('role');
  if (role === 'aluno') {
    document.getElementById('app-aluno').classList.add('active');
  } else {
    document.getElementById('app-responsavel').classList.add('active');
  }
}

function logout() {
  localStorage.removeItem('logado');
  localStorage.removeItem('role');
  location.reload();
}

// Voltar (simples, adaptado do seu HTML)
function voltar(targetId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(targetId).classList.add('active');
}
