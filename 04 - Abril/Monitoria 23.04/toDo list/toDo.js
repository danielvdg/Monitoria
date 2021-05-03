
var btnAdd = document.querySelector("#btnAdd");
var lista = document.querySelector("#lista");


btnAdd.addEventListener("click", function(){

    console.log("Estou funcionando"); 
    var texto = document.querySelector("#input").value;
    console.log(input);
    criaTarefa(texto);
    
})

function criaTarefa (texto){
    var li = document.createElement("li");
    lista.appendChild(li);
    li.classList.add("itemLista");
    li.textContent = texto;  
    

}