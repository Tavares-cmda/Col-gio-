function esconderTudo(){
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("tipo").classList.add("hidden");
  document.getElementById("registro").classList.add("hidden");
  document.getElementById("menu").classList.add("hidden");
}

function irPara(tela){
  esconderTudo();
  document.getElementById(tela).classList.remove("hidden");
}

function voltar(tela){
  esconderTudo();
  document.getElementById(tela).classList.remove("hidden");
}

/* 🔥 ENTRAR DIRETO (SEM LOGIN) */
function entrarDireto(tipo){
  esconderTudo();
  document.getElementById("menu").classList.remove("hidden");

  document.getElementById("tituloMenu").innerText = "Menu - " + tipo;
}

/* REGISTRO */
function abrirRegistro(){
  esconderTudo();
  document.getElementById("registro").classList.remove("hidden");
}

function validarRegistro(){
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  document.getElementById("btnRegistrar").disabled =
    !(email.includes("@escola.pr.gov.br") && senha.length >= 4);
}

function registrar(){
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);

  alert("Conta criada com sucesso!");
  voltar("inicio");
}

function sair(){
  esconderTudo();
  document.getElementById("inicio").classList.remove("hidden");
}
