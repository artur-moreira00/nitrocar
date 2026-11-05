var script = document.currentScript;
var base = script.getAttribute("src").replace("js/protecao.js", "");
var perfilPagina = script.getAttribute("data-perfil");
var perfilUsuario = localStorage.getItem("perfil");

if (perfilPagina != "" && perfilPagina != perfilUsuario) {
  alert("Acesso negado! Faça login com o perfil correto.");
  window.location.href = base + "index.html";
}

function sair() {
  localStorage.removeItem("perfil");
  window.location.href = base + "index.html";
}

function link(pasta, arquivo, texto) {
  var classe = "";
  if (window.location.href.indexOf(pasta + "/" + arquivo) != -1) { classe = ' class="ativo"'; }
  return '<a' + classe + ' href="' + base + 'views/' + pasta + '/' + arquivo + '">' + texto + '</a>';
}

var menu = "";
if (perfilPagina == "funcionario") {
  var p = "funcionario/telas";
  menu = link(p, "painel.html", "Painel") + link(p, "ordens.html", "Ordens de serviço") +
         link(p, "agenda.html", "Agenda") + link(p, "estoque.html", "Estoque") + link(p, "clientes.html", "Clientes") + link(p, "carros.html", "Veículos");
} else if (perfilPagina == "cliente") {
  var p = "cliente/telas";
  menu = link(p, "painel.html", "Painel") + link(p, "veiculos.html", "Meus veículos") +
         link(p, "agendar.html", "Agendar") + link(p, "historico.html", "Histórico") + link(p, "avaliar.html", "Avaliar") +
         link(p, "orcamentos.html", "Orçamentos");
} else if (perfilPagina == "administrativo") {
  var p = "administrativo/telas";
  menu = link(p, "painel.html", "Painel") + link(p, "funcionarios.html", "Funcionários") +
         link(p, "financeiro.html", "Financeiro") + link(p, "relatorios.html", "Relatórios");
} else {
  menu = '<a href="' + base + 'index.html">Login</a>' + link("publico", "sobre.html", "Sobre") +
         link("publico", "servicos.html", "Serviços") + link("publico", "contato.html", "Contato");
}

if (perfilPagina != "") {
  menu = menu + '<a href="#" onclick="sair()">Sair</a>';
}

document.write('<nav><span class="marca">Nitro<b>Car</b></span>' + menu + "</nav>");
