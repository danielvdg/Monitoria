function somatotal (){

    var numero = parseInt(prompt("digite um numero "));

    var cont = 0;

    for (var i = 0 ; i <= numero ; i++){

        if ( i %2 === 0){

            cont += i;
            
            console.log(i)                
        }

    }

    document.write(`A soma dos pares de 0 a ${numero} é igual ${cont} `);

 
}

console.log(somatotal());
// somatotal();