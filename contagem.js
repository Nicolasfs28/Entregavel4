function contagem(numeros){
    var contagem = 0;
    for( i=0; i<numeros.length; i++) {
        var num = numeros[i];
        var fra= parseInt(Math.round((num - parseInt(num)) * 100));
        if(fra == 0){
            contagem++;
        }        
    }
    return "Quantidade de numeros inteiros: " + contagem;
}

module.exports = contagem;