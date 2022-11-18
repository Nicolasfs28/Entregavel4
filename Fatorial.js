const readline = require('readline');

    var n=parseInt(prompt('informe um numero'))
    var fatorial=1
    var i=n
    while(i>=1){
        fatorial=fatorial*i
        i=i-1
    }
    document.write("O fatorial de "+ n + " é "+ fatorial)

