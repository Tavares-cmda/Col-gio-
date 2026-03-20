let tipo = "";

function irPara(tela){
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById(tela).classList.remove("hidden");
}

function voltar(tela){
  document.getElementById("tipo").classList.add("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById(tela).classList.remove("hidden");
}

function abrirLogin(t){
  tipo = t;

  document.getElementById("tipo").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");

  document.getElementById("tituloLogin").innerText = "Login - " + t;
}

function validar(){
  let cpf = document.getElementById("cpf").value;
  let cel = document.getElementById("celular").value;

  document.getElementById("entrar").disabled = !(cpf.length > 3 && cel.length > 7);
}

function entrar(){
  document.getElementById("login").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function sair(){
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("inicio").classList.remove("hidden");
}
