function consultaEndereco() {
  const cep = document.getElementById("cep");
  cep.addEventListener("blur", (e) => {
    let Cep = document.getElementById("cep").value;
    if (Cep.length !== 8) {
      alert("Digite um CEP com 8 números!");
      cep.value = "";
    } else {
      fetch(`http://viacep.com.br/ws/${Cep}/json/`).then((response) => {
        response.json().then((data) => {
          document.getElementById("logradouro").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("localidade").value = data.localidade;
          document.getElementById("uf").value = data.uf;
        });
      });
    }
  });
}

function enviar() {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let rg = document.getElementById("rg").value;
  let cep = document.getElementById("cep").value;
  let rua = document.getElementById("logradouro").value;
  let bairro = document.getElementById("bairro").value;
  let cidade = document.getElementById("localidade").value;
  let numero = document.getElementById("numero").value;
  let estado = document.getElementById("uf").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  let json = {
    "nome": nome,
    "sobrenome": sobrenome,
    "rg": rg,
    "cep": cep,
    "rua": rua,
    "bairro": bairro,
    "cidade": cidade,
    "numero": numero,
    "estado": estado,
    "email": email,
    "senha": senha
  };
console.log(json);

}

consultaEndereco()
enviar()
