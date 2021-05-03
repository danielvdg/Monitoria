var btnEnviar = document.querySelector("#btnEnviar");
var img = document.querySelector("#img");
var nome = document.querySelector("#nome");
var idade = document.querySelector("#idade");
var genero = document.querySelector("#genero");
var endereco = document.querySelector("#endereco");
var email = document.querySelector("#email");
var usuario = document.querySelector("#usuario");

btnEnviar.addEventListener("click", function(){

    console.log(("funcionando"));
    buscarUsuario();
   
});


function buscarUsuario(){

    var requisicao = new XMLHttpRequest()

    requisicao.open("GET" , "https://randomuser.me/api")
    requisicao.onload = function(){

        if (requisicao.status === 200){

            // responde e a resposta da minha requisição    
            var  respostaRequisicao = JSON.parse(requisicao.response);
            console.log(respostaRequisicao);
            mostraNaTela(respostaRequisicao)

        } else {

            console.log("erro na requesição");
        }

    }

    requisicao.send()
}

function mostraNaTela (respostaRequisicao){

    var results = respostaRequisicao.results[0]

    console.log(results);
    img.src =  `${results.picture.large}`
    genero.textContent = results.gender
    nome.textContent= `${results.name.title} ${results.name.first} ${results.name.last}`
    idade.textContent= `${results.dob.age}`
    endereco.textContent=`${results.location.city}  ${results.location.country} ${results.location.postcode} ${results.location.state} `
    email.textContent =`${results.email}`
    usuario.textContent= `${results.login.username}`


}