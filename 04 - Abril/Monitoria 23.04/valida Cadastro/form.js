var btn = document.querySelector("#envair");
var nomeInvalido = document.querySelector ("#nomeInvalido");

btn.addEventListener("click", function (event){
event.preventDefault();
var nome = document.querySelector("#nome").value;
var email = document.querySelector("#email").value;
var senha = document.querySelector("#senha").value;
var confirmacaoSenha = document.querySelector("#confirmacaoSenha").value;
validaNome(nome);
console.log(nome, email, senha, confirmacaoSenha);

});

function validaNome (nome){
    var arrNomes = nome.spli(" ");
    
    if(arrNomes.length < 2 ){
        nomeInvalido.classList.remove("invisivel");


    }else {

        nomeInvalido.classList.add("invisivel");
    }
    console.log(arrNomes);
}

