// banco de dados local
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

// função trocar tela
function mostrarTela(id){

document.querySelectorAll(".screen").forEach(function(tela){
tela.classList.remove("active");
});

document.getElementById(id).classList.add("active");

}

// splash 5 segundos
window.onload = function(){

setTimeout(function(){
mostrarTela("auth");
},5000);

};

// registrar usuário
function registrar(){

let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;
let msg = document.getElementById("msg");

if(!email.endsWith("@escola.pr.gov.br")){

msg.innerText = "Use um email da escola!";
return;

}

if(email === "" || senha === ""){

msg.innerText = "Preencha os campos!";
return;

}

usuarios[email] = senha;

localStorage.setItem("usuarios", JSON.stringify(usuarios));

msg.innerText = "Registro feito! Agora faça login.";

}

// login
function login(){

let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;
let msg = document.getElementById("msg");

if(usuarios[email] === senha){

localStorage.setItem("logado", email);

mostrarTela("tipo");

}else{

msg.innerText = "Email ou senha incorretos.";

}

}

// aluno
function abrirAluno(){

mostrarTela("aluno");

}

// responsável
function abrirResponsavel(){

mostrarTela("responsavel");

}

// logout
function logout(){

localStorage.removeItem("logado");

mostrarTela("auth");

}
