var botaoComprar = document.getElementById("botaoComprar");

botaoComprar.onclick = function(){
    var tituloProduto = document.getElementById("tituloProduto");
    var precoProduto = document.getElementById("precoProduto");
    var idProduto = document.getElementById("idProduto");

    var produtosCarrinho = [];
    if(localStorage.getItem("produtosCarrinho") != null){
        produtosCarrinho = JSON.parse(localStorage.getItem("produtosCarrinho"));
    }
    produtosCarrinho.push({
        id: idProduto.innerText,  
        titulo: tituloProduto.innerText,
        preco: precoProduto.innerText
    })

    localStorage.setItem("produtosCarrinho", JSON.stringify(produtosCarrinho));

    window.location = "./carrinho.html";
}