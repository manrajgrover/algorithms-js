var fibMonaccianSearch = (arr, item, arrLen) => 
{
    let fibMMm2 = 0; 
    let fibMMm1 = 1; 
    let fibM = fibMMm2 + fibMMm1;
   
    while (fibM < arrLen)
    {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }
   
    let offset = -1;
    while (fibM > 1)
    {
        let i = Math.min(offset + fibMMm2, arrLen-1);

        if (arr[i] < item)
        {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        }
        else if (arr[i] > item)
        {
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        }
        else return i;
    }
   
    if(fibMMm1 && arr[arrLen-1] == item){
      return arrLen-1
    }
   
    return -1;
};


module.exports = fibMonaccianSearch;
