/**
 * Calculates Longest common leading and trailing substring of two numbers
 * @param  {Number} a First string
 * @param  {Number} b Second string
 * @return {Number}   Longest common leading/trailing substring
 */
const LongestCommLeadtrailSubString = (str1, str2) => {
        var leading = "";
        var trailing = "";
        var leadflag = false;
        var trailflag = false;
        if(str1.length ===0 || str2.length === 0){
                console.log("Must enter valid strings")
        }

        var end1 = str1.length - 1
        var end2 = str2.length - 1

        let pos = 0

        while (pos <= end1 && pos <= end2 && (leadflag === false || trailflag === false)) {
                if (leadflag === false) {
                        if (str1[pos] === str2[pos]) {
                                leading = str1.substring(0, pos+1)
                                
                        }
                        else{
                                leadflag = true
                        }
                }
                if (trailflag === false) {
                        if (str1[end1 - pos] === str2[end2 - pos]) {
                                trailing = str1.substring(end1 - pos)
                                
                        }
                        else{
                                trailflag = true;
                        }
                }
                pos++
        }
        return {"leading":leading,"trailing": trailing}
};

module.exports = LongestCommLeadtrailSubString;