var listaFilmes = [];

function adicionarFilme() {
  var filmeTitulo = document.getElementById("filmeTitulo").value;
  var filmeURL = document.getElementById("filmeURL").value.toLowerCase();
  if (filmeURL.endsWith(".jpg")) {
    listaFilmes.push([filmeTitulo, filmeURL]);
    listarFilmesNaTela();
  } else {
    console.error("Endereço de filme inválido.");
    alert("Endereço de filme inválido.");
  }
  document.getElementById("filmeTitulo").value = "";
  document.getElementById("filmeURL").value = "";
}

function listarFilmesNaTela() {
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = ""
  listaFilmes.forEach((element, i) => {
    var elementoFilmeTitulo = "<h2>" + element[0] + "</h2>";
    var elementoFilmeURL = "<img src=" + element[1] + ">";
    var botaoDeletar =
      "<button class='btn btn-danger' onClick='apagarFilme("+i+")'>X</button>";
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML +
      elementoFilmeURL +
      elementoFilmeTitulo +
      botaoDeletar;
  });
}

function apagarFilme(i) {
  listaFilmes.splice(i, 1);
  listarFilmesNaTela();
}
