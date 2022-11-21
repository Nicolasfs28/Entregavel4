function ordenacao(vetor, i) {
  
    if (vetor.length <= 1){
    return vetor;
  }

  var aux = vetor[0];
  var j = []; 
  var c = [];

  for (var i = 1; i < vetor.length; i++) {
    vetor[i] < aux ? j.push(vetor[i]) : c.push(vetor[i]);
  } return ordenacao(j).concat(aux, ordenacao(c));

};



module.exports = ordenacao;