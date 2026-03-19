let tipoUsuario = "";

function abrirLogin(tipo){
  tipoUsuario = tipo;

  document.getElementById("home").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");

  document.getElementById("tituloLogin").innerText = "Login - " + tipo;
}

function voltarHome(){
  document.getElementById("login").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

function validarCampos(){
  let cpf = document.getElementById("cpf").value;
  let celular = document.getElementById("celular").value;

  let botao = document.getElementById("btnEntrar");

  if(cpf.length > 3 && celular.length > 7){
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

function entrar(){
  document.getElementById("login").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function sair(){
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");

  document.getElementById("cpf").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("btnEntrar").disabled = true;
}
