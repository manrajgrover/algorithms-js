/**Calculates the divisors of a given positive number
 * @param  {Number} n Given number
 * @return {Array}   Divisors of the given number
*/
 const divisors= (n) => {
    if(n>=0){
        
        var div=[];
                
        for(i=1;i<=Math.sqrt(n);i++){
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
           
        }
        
        return div;
    }
}
 module.exports = divisors;
