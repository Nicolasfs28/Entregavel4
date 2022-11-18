const readline = require('readline');

    var vetor=[]
    var aux=0

    vetor = prompt("digite numeros separados por espaço").split(" ").map(Number)

    for(var j=0; j<vetor.length; j++){
        for(var c=0; c<vetor.length;c++){
            if(vetor[j]<vetor[c]){
                aux=vetor[j]
                vetor[j]=vetor[c]
                vetor[c]=aux
            }
        }
    }
    for(var i=0; i<vetor.length;i++){
        console.log(vetor[i]+" ")
    }

