var formSignIn=document.getElementById("form-sign-in");
var formLogIn=document.getElementById("form-log-in");
var btnLogIn = document.getElementById("btn-log-in");
var btnSignIn = document.getElementById("btn-sign-in");
var divChangeSignIn = document.getElementById("change-sign-in");
var divChangeLogIn = document.getElementById("change-log-in");
//Botones crear cuenta y sin-in
btnSignIn.onclick=showFormSignIn;
btnLogIn.onclick=showFormLogIn;

function showFormSignIn(){
formSignIn.style.display="block";
formLogIn.style.display="none";
divChangeLogIn.style.display="none";
divChangeSignIn.style.display="block";
}

function showFormLogIn (){
formLogIn.style.display="block";
formSignIn.style.display="none";
divChangeLogIn.style.display="block";
divChangeSignIn.style.display="none";
}