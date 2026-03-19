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
  const btn = document.getElementById("btnEntrar");

  if(btn.disabled) return;

  document.getElementById("login").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function sair(){
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

/* VALIDAÇÃO */
function validarCampos(){
  const cpf = document.getElementById("cpf").value.trim();
  const celular = document.getElementById("celular").value.trim();
  const btn = document.getElementById("btnEntrar");

  if(cpf !== "" && celular !== ""){
    btn.disabled = false;
    btn.classList.add("ativo");
  }else{
    btn.disabled = true;
    btn.classList.remove("ativo");
  }
}

/* botão de código (opcional) */
function enviarCodigo(){
  alert("Código enviado!");
}
