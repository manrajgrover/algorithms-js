function pow(base,exponent){
    var final_output = 1, internal_base = base, internal_exponent = exponent
    while (internal_exponent>0){
        if (internal_exponent%2==0){
            internal_base *= internal_base
            internal_exponent = parseInt(internal_exponent/2)
        } else {
            final_output *= internal_base
            internal_exponent -= 1
        }
    }
    return final_output
}

function linearCompare(searchTerm, searchSpace, startPoint, endPoint){
    if(endPoint-startPoint + 1 != searchTerm.length ){        
        return false
    }    

    let j;
    for (j= startPoint; j<endPoint+1; j++){
        if(searchTerm[j-startPoint] != searchSpace[j]){
            return false;
        }
    }    
    return true;
}

/**
 * Returns an Array of starting indexes where searchTerm was found. Returns [-1] if no element
 * @param {String} searchTerm Term to search for
 * @param {String} searchSpace Text to be searched in
 * @param {Number} polynomial Polynomial value for polynomial hash fn
 * @param {Number} bucket Size of your bucket (more is better)
 * @return {Number[]} Array containing index location of matches
 */
function rabin_karp(searchTerm, searchSpace, polynomial = 7, bucket = 3000){
    if (searchTerm.length<1 || searchSpace.length<1){
        return [-1]
    }
    
    let hash_val = 0
    for(i=0; i<searchTerm.length; i++){
        hash_val *= polynomial
        hash_val += searchTerm.charCodeAt(i)
    }
    hash_val %= bucket

    var startIndex = []

    let super_hash = 0,current_hash =0;
    let currentTermIndex = 0
    const nth_polynomial_chain = pow(polynomial,searchTerm.length)

    for(j=0; j<searchSpace.length; j++){        
        super_hash *= polynomial
        super_hash += searchSpace.charCodeAt(j)
        
        if(j >= searchTerm.length){
            super_hash -= (nth_polynomial_chain * searchSpace.charCodeAt(currentTermIndex))
            currentTermIndex +=1
        }
        current_hash = super_hash % bucket

        //console.log(currentTermIndex + " to " +j + " :" + current_hash+ "\n")
        if (current_hash == hash_val){
            if(linearCompare(searchTerm,searchSpace,currentTermIndex,j)){
                startIndex.push(currentTermIndex);
            }
        } 
    }

    if (startIndex.length<1){
        return [-1]
    } else {
        return startIndex
    }
}

module.exports = rabin_karp