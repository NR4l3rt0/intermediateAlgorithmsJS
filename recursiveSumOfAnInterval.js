/*
 * Given an array of two elements, return the sum of all the elements in between,
 * including the first and last elements.
 */


function sumAll(arr) {

  let max= Math.max(arr[0],arr[1]);
  let min= Math.min(arr[0],arr[1]);

  let total= recursiveSum(max, min);

  return total;
}


function recursiveSum(from, to){
  
  let numberToSum= from;

  if(from === to){
    return to;
    
  } else {

    let partialTotal= recursiveSum(from - 1, to) + numberToSum;
    return partialTotal;
  }
}