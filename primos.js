function primos(numPrimo){
    var numPrimo
    var numDivisores=0
  
    for(var i=1; i<=numPrimo;i++){
        if(numPrimo%i==0)
        numDivisores++
    }
    if(numDivisores==2){
        return "O número digitado é primo!"
    }else{
        return "O número digitado não é primo!";
    }
}
module.exports = primos;