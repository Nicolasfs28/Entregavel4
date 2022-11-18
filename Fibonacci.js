const readline = require('readline');

    var n = parseInt(prompt("Informe um numero de termos da sequência"))
    var termo1=0
    var termo2=1
    var termo3
    
    document.write(termo1+ ", "+termo2)
    for (var i=3; i<=n; i++){
        termo3=termo1+termo2
        document.write(", "+termo3)
        termo1=termo2
        termo2=termo3
    }

