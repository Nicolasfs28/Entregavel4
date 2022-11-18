const readline = require('readline');

    var numPrimo
    var numDivisores=0
    numPrimo=parseInt(prompt("Digite um número"))
    for(var i=1; i<=numPrimo;i++){
        if(numPrimo%i==0)
        numDivisores++
    }
    if(numDivisores==2){
        document.write("O número digitado é primo")
    }else{
        document.write("O número digitado não é primo")
    }

