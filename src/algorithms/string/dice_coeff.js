function n_gram(str,n){
	
	if (n <1 || n>str.length) throw Error("Not possible n-gram");
		
	gram_split = new Map();	// gram <-> count
	let startpos;let current_gram = "";
	for(startpos = 0;startpos < str.length ; startpos+=1){		
		current_gram += str[startpos]
		
		if(startpos >= n-1) {
						
			if (gram_split.has(current_gram)){
				gram_split.set(current_gram,gram_split.get(current_gram) + 1)
			} else {
				gram_split.set(current_gram,1)
			}
			
			current_gram = current_gram.substr(1)
		}
	}
	
	return gram_split
}

function min(a,b){
	return a>b ? b : a;
}

/**
 * Returns the computed Dice Coefficient for the given n-gram of the two strings
 * @param {String} st1 First string
 * @param {String} st2 Second String
 * @param {Number} n n-mer
 * @return {Number} a number between 0 and 1
 */
function compute_dice(st1,st2,n){

	if (st1.length<1 || st2.length<1 || n > min(st1.length,st2.length)) return -1

	map_st1 = n_gram(st1,n)
	map_st2 = n_gram(st2,n)
	
	let shared_value_count = 0;
	
	for (let x of map_st1.keys()){
		if(map_st2.has(x)){
			shared_value_count+= min(map_st1.get(x),map_st2.get(x));			
		}
	}
	
	let st1_value_count = 0,st2_value_count = 0;
	
	for (let x of map_st1.keys()){
		st1_value_count += map_st1.get(x)
	}
	
	for (let x of map_st2.keys()){
		st2_value_count += map_st2.get(x)
	}
	
	let score = (2* shared_value_count)/(st1_value_count + st2_value_count)
	
	return score
	//score = 2*shared_value_count/ (st1_value_count + st2_value_count)
}

module.exports = compute_dice;