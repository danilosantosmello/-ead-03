/**
 * EXERCÍCIO 2 - MÉDIA
 */
function media(n1,n2){
  var n1;
  var n2;
  var media = (n1 + n2) / 2;

  console.log("A Média é: " + media);
}

/**
 * EXERCÍCIO 3 - FOR
 */

function escreverNumerosAte(ate){
var ate;

for(var i = 1; i <= ate; i++ ){

console.log(i);

}

}

/**
 * EXERCÍCIO 4 - X a Y
 */

 function divisiveisPor(de,ate){

   for(var i = de; i<=ate; i++ ){
     if(i%de===0){
       
       console.log(i);
     }


   }

   /**
    * EXERCICIO 5 - VETOR
    */
    var vetor = [6542, 1235, 3215, 6251, 3215, 3225, 4583, 2551, 2356, 1325, 9965, 1230, 4458, 6352];
    var maior = vetor[0];
    var menor = vetor[0];

    function maiorMenor(vetor){
      for(var i = 0; i< vetor.length; i++){
        var elementoAtual = vetor[i];

        if(elementoAtual>maior)
        maior=elementoAtual;
        
        if(elementoAtual< menor)
        menor = elementoAtual;
      }

      console.log('Maior:' + maior);
      console.log('Menor:' + menor);
    }


 }
