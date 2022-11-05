function redefinir() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (evento){
        evento.preventDefault();
        document.getElementById("resultado").innerHTML = "Um email de redefinição de senha foi enviado para o seu email!"
    })
}

redefinir()