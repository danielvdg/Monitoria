//crie um function que receba um numero
//em seguida crie um array que vai receber outros arrays dentro
//o numero de array que sera incluso sera o numero que foi passado para a função
//dentro de cada array inlcluso adicione 10 numeros aleatorios entre 0 - 9
//depois retorne o array maior, com os arrays inclusos, e os numeros do array incluso em ordem crescente


function criandoArr (numero){

    var paiArr = [];

    for (var i = 0 ; i < numero; i++ ){
        
        var  arr2 = [];

        for(var j = 0 ; j < 10 ; j++) {
            var numeroAleatorio = Math.ceil(Math.random()*9);
            
            arr2.push(numeroAleatorio)
        }

      return arr2.sort();
    }
    return paiArr;
}

