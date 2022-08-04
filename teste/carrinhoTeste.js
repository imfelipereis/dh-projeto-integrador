var produtosCarrinho = JSON.parse(localStorage.produtosCarrinho);
var tabelaProdutosCarrinho = document.getElementById("produtosCarrinho");

for(let i = 0; i < produtosCarrinho.length; i++){
    var linha = document.createElement("tr");
    var celulaNome = document.createElement("td");
    celulaNome.innerText = produtosCarrinho[i].titulo;
    linha.append(celulaNome);
    tabelaProdutosCarrinho.append(linha);
}

