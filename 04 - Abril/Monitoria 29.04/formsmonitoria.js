var cadastrar = document.querySelector("#btnCadastrar") 
var btnOK = document.querySelector("#btnOK") 
var recebirEmail = document.querySelector("#recberEmail") 
var radioSim = document.querySelector("#radioSim") 
var radioNao = document.querySelector("#radioNao") 
var tel = document.querySelector("#tel") 

cadastrar.addEventListener("click", function(event){

event.preventDefault();
recebirEmail.classList.remove("invisivel");
    
})

btnOK.addEventListener("click", function(event){

    event.preventDefault();
    recebirEmail.classList.add("invisivel");
    

});

radioSim.addEventListener("change", function(event){

    event.preventDefault();
    tel.classList.remove("invisivel")

})

radioNao.addEventListener("change", function(event){

    event.preventDefault();
    tel.classList.add("invisivel")

})