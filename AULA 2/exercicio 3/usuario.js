function validar() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    var userCorreto = "nicole.santos";
    var passCorreto = "010308";

    if(userCorreto == user && passCorreto == pass){
        alert("Login realizado com sucesso");
        window.location.href = "index.html" 
    }else{
        alert("Usuário ou senha inválidos!!");
    }
}