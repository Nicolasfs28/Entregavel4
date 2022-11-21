function mdc(mdc1, mdc2){
        var mdc = 1;
        var aux;
        aux = mdc1;
        if (mdc1 > mdc2){
                aux = mdc1;
        } if (mdc2 > mdc1) {
                aux = mdc2;
        }

        for (var n = 2; n <= aux; ++n){
                while((mdc1 % n==0) && (mdc2 % n == 0)){
                        mdc1 = mdc1 / n;
                        mdc2 = mdc2 / n;
                        mdc = mdc * n;
                }
        }

        return "MDC é: " + mdc;
}

module.exports = mdc;
