function validatePassword(){
    let senha = document.getElementById("senha");
    let senha2 = document.getElementById("senha2");
  if(senha.value != senha2.value) {
    senha2.setCustomValidity("As senhão estão diferentes!");
  } else {
    senha2.setCustomValidity('');
  }
}

senha.onchange = validatePassword;
senha2.onkeyup = validatePassword;

validatePassword()
