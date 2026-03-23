let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

// trocar tela
function show(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// splash
window.onload = () => {
  setTimeout(() => {
    if(localStorage.getItem("logado")){
      show("tipo");
    } else {
      show("auth");
    }
  }, 5000);
};

// registrar
function registrar(){
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let msg = document.getElementById("msg");

  if(!email.endsWith("@escola.pr.gov.br")){
    msg.innerText = "Use email da escola!";
    return;
  }

  if(usuarios[email]){
    msg.innerText = "Já existe!";
    return;
  }

  usuarios[email] = senha;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  msg.innerText = "Registrado!";
}

// login
function login(){
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let msg = document.getElementById("msg");

  if(usuarios[email] === senha){
    localStorage.setItem("logado", "true");
    show("tipo");
  } else {
    msg.innerText = "Erro no login!";
  }
}

// tipo
function entrarAluno(){
  show("aluno");
}

function entrarResponsavel(){
  show("responsavel");
}

// sair
function logout(){
  localStorage.removeItem("logado");
  show("auth");
}
