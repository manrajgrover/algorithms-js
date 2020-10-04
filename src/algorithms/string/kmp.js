function kmp(searchTerm,searchSpace,uniqueToken = '\b'){    
    //borderSize will be used to match up with searchTerm + $ + searchSpace
    var borderSize = []
    var textArray = searchTerm + uniqueToken + searchSpace
    borderSize.push(0);
    
    let border = 0;
    for (i=1; i<searchTerm.length + searchSpace.length + 1; i++) {
        while ((border > 0) && (textArray[i] != textArray[border])) {
            border = borderSize[border - 1]
        }

        if(textArray[i] == textArray[border]){
            border += 1
            borderSize.push(border)
        } else {
            border = 0
            borderSize.push(border)
        }    
    }

    //returns the end positions 
    return borderSize
}


/**
 * Returns an Array of starting indexes where searchTerm was found. Returns [-1] if no element
 * @param {String} searchTerm Term to search for
 * @param {String} searchSpace Text to be searched in
 * @param {String} uniqueToken unique never occuring token for border cover
 * @return {Number[]} Array containing index location of matches
 */
function run_kmp(searchTerm,searchSpace,uniqueToken = '\b'){
    if (searchTerm.length<1 || searchSpace.length<1){
        return [-1]
    } else {
        let startIndex = []
        correctPositions = kmp(searchTerm,searchSpace,uniqueToken = '\b')
        for (i =0; i<correctPositions.length; i++){
            if(correctPositions[i] == searchTerm.length){
                // we were offsetting the value by and additional searchTerm.length + 1 .Hence the i - (searchTerm.length -1 ) - (searchTerm.length + 1) 
                startIndex.push(i - 2* searchTerm.length)
            }
        }
        if (!startIndex.length){
            return [-1]
        } else {
            return startIndex
        }
    }
}

module.exports = run_kmp