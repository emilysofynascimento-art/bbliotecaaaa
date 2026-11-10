
function enviarPedido(event) {

    event.preventDefault();

    alert("Pedido enviado com sucesso!");

    window.location.href = "sucesso.html";

}


// Identificar o livro escolhido

let endereco = window.location.search;

if (endereco == "?livro=principe") {
    document.getElementById("livro").value = "Príncipe Cruel";
}

if (endereco == "?livro=rei") {
    document.getElementById("livro").value = "Rei Perverso";
}

if (endereco == "?livro=tithe") {
    document.getElementById("livro").value = "Tithe";
}

if (endereco == "?livro=valiant") {
    document.getElementById("livro").value = "Valiant";
}
