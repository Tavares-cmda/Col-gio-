let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

function trocarTela(id){
document.querySelectorAll(".screen").forEach(t => t.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

window.addEventListener("load", function(){
setTimeout(function(){
trocarTela("auth");
},5000);
});

document.getElementById("btnLogin").onclick = function(){

let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;
let msg = document.getElementById("msg");

if(usuarios[email] === senha){
localStorage.setItem("logado", email);
trocarTela("tipo");
}else{
msg.innerText = "Email ou senha incorretos.";
}

};

document.getElementById("btnRegistro").onclick = function(){

let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;
let msg = document.getElementById("msg");

if(!email.endsWith("@escola.pr.gov.br")){
msg.innerText = "Use email da escola.";
return;
}

usuarios[email] = senha;
localStorage.setItem("usuarios", JSON.stringify(usuarios));

msg.innerText = "Registro feito! Agora faça login.";
};

document.getElementById("btnAluno").onclick = function(){
trocarTela("aluno");
};

document.getElementById("btnResponsavel").onclick = function(){
trocarTela("responsavel");
};

document.getElementById("logoutAluno").onclick = function(){
localStorage.removeItem("logado");
trocarTela("auth");
};

document.getElementById("logoutResp").onclick = function(){
localStorage.removeItem("logado");
trocarTela("auth");
};
