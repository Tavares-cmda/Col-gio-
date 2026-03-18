function abrirLogin(tipo){
  document.getElementById("home").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");

  document.getElementById("tituloLogin").innerText = "Login - " + tipo;
}

function voltar(){
  document.getElementById("login").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

function entrar(){
  document.getElementById("login").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function sair(){
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}
