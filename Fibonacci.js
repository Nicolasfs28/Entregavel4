
function fibonacci(fibo){
    let anter = 0;
    let atu = 1;
    let result = "0, ";

    for(let i = 1; i < fibo; i++){
      if(i == fibo - 1){
        result += atu + ".";
      }else{
        result += atu + ", ";
      }
      let aux = atu;
      atu = anter + aux;
      anter = aux;
    }
    return result;
}

module.exports = fibonacci;
