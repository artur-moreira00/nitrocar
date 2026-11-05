var usuarios = {
  "funcionario.nitrocar@email.com": "funcionario",
  "clinte.nitrocar@email.com": "cliente",
  "cliente.nitrocar@email.com": "cliente",
  "administrativo.nitrocar@email.com": "administrativo"
};

function entrar() {
  var email = document.getElementById("email").value.trim().toLowerCase();
  var perfil = usuarios[email];

  if (perfil == undefined) {
    document.getElementById("erro").innerText = "E-mail não cadastrado!";
    return;
  }

  localStorage.setItem("perfil", perfil);
  window.location.href = "views/" + perfil + "/telas/painel.html";
}
