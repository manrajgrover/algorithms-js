/**
 * Calculates the divisors of a given positive number
 * @param  {Number} n Given number
 * @return {Array}   Divisors of the given number
*/

const divisors= (n) => {
    if(n>=0){
        //divisors will be stored in the array 'div' and it will be returned at the end
        var div=[];
        i=1;
        
        while(i<=Math.sqrt(n)){
            if(n%i ==0){
                //if divisors are equal push only one to the array
                if(n/i==i){
                    div.push(i);
                }
                //else push both
                else{
                    div.push(i,n/i);
                }
            }
            i=i+1;
        }
        //sort according to ascending order
        div=div.sort(function(a, b){return a-b});
        return div;
    }
}

module.exports = divisors;
