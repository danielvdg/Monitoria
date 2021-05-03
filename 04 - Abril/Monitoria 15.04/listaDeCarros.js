// Permitir que o usuário adicione carros em dos tipos de listas, carros antigos e carros novos.

// Sempre perguntar em qual lista deseja adicionar,qual o modelo do veiculo, e se deseja adicionar outro veiculo ou não

// mostrar os itens de cada lista individualmente dento de uma LI e um titulo para cada lista




// criando uma função para minha lista
function listaDeCarros () {
    // criando minha lista
    var automoveisAntigos = [];
    var autmoveisNovos = [];
    
    
    // variavel para minhas condições
    var resposta = "S";
    var listaA = 1;
    var listaB = 2;
    
    
    // Agora vou adicionar receber na minha lista 
    while(resposta  === "S") {
        
        var selecionarLista = parseInt(prompt(`Qual lista você quer escolher?\n 1-Carros Antigos \n 2- Carros Novos\n 3- Não deseja compra \n `));
        
        
       
            //  repetir minha condições
            while (selecionarLista === listaA || selecionarLista === listaB ){

                // Condições para selecionar a lista
                if (selecionarLista == listaA){           
                    automoveisAntigos.push(prompt("digite o carro que voce quer compra? "));   
                    prompt("você deseja continuar  comprando? S ou N? ").toUpperCase();
                    
                    
                    // lista no HTML
                    if(automoveisAntigos.length >= 1 )
                    document.write (`
                    <p><h1>Automovéis Antigos</h1></p> 
                    <li>${automoveisAntigos}</li>
                    `)

                    
                }else if (selecionarLista == listaB){           
                    autmoveisNovos.push(prompt("digite o carro que voce quer compra? "));
                    prompt("você deseja continuar  comprando? S ou N? ").toUpperCase();
                    
                    
                    // lista no HTML
                    document.write (`
                    <p><h1>Automovéis Novos</h1></p> 
                    <li>${autmoveisNovos}</li>
                    `)
                    
                } else {
                    
                    alert ("Obrigado Volte sempre 💵💸💴💶🏎🏎🏎🏍🏍🏍🏍")
                    resposta = "S";
                
                }
            }           
        
               
        return resposta;
    }   
    
    
    
}
// chamando minha funçao
listaDeCarros();