function contagem(inteiros){
    var n,contador, i, inteiro

    contador=0
    i=0

    n=parseInt(prompt("Informe a quantidade de números que deseja testar"))
    while(i<n){
        inteiro=Number(prompt())
        if(Number.isInteger(inteiro)){
            contador++
        }
        i++
    }
    document.write("A quantidade de números inteiros é: "+ contador)


}
module.exports=contagem