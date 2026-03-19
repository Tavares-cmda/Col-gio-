// NAVEGAÇÃO INICIAL
function irLogin(){
  trocarTela("inicio", "loginEmail");
}

function irRegistro(){
  trocarTela("inicio", "registro");
}

function voltarInicio(){
  trocarTela("registro", "inicio");
  trocarTela("loginEmail", "inicio");
}

// REGISTRO
function registrar(){
  const email = document.getElementById("emailReg").value;
  const senha = document.getElementById("senhaReg").value;
  const conf = document.getElementById("confSenha").value;

  if(!email.endsWith("@escola.pr.gov.br")){
    alert("Use email escolar!");
    return;
  }

  if(senha !== conf){
    alert("Senhas não coincidem!");
    return;
  }

  localStorage.setItem("usuario", email);
  localStorage.setItem("senha", senha);

  alert("Registrado com sucesso!");
  trocarTela("registro", "loginEmail");
}

// LOGIN
function login(){
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  const user = localStorage.getItem("usuario");
  const pass = localStorage.getItem("senha");

  if(email === user && senha === pass){
    trocarTela("loginEmail", "home");
  }else{
    alert("Login inválido!");
  }
}

// ALUNO / RESPONSÁVEL
function abrirLogin(tipo){
  trocarTela("home", "login");
  document.getElementById("tituloLogin").innerText = tipo;
}

function voltarHome(){
  trocarTela("login", "home");
}

// VALIDAÇÃO
function validarCampos(){
  const cpf = document.getElementById("cpf").value.trim();
  const celular = document.getElementById("celular").value.trim();
  const btn = document.getElementById("btnEntrar");

  if(cpf && celular){
    btn.disabled = false;
    btn.classList.add("ativo");
  }else{
    btn.disabled = true;
    btn.classList.remove("ativo");
  }
}

// ENTRAR
function entrar(){
  trocarTela("login", "menu");
}

// SAIR
function sair(){
  trocarTela("menu", "inicio");
}

// FUNÇÃO BASE
function trocarTela(sair, entrar){
  document.getElementById(sair).classList.add("hidden");
  document.getElementById(entrar).classList.remove("hidden");
}
