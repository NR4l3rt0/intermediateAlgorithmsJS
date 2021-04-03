/* 
 * Given an array and a variable numbers of arguments passed into the function,
 * return an array that removes the values passed in the arguments from the original array.
 */

function destroyer(arr) {

  let varArgs= Array.prototype.slice.call(arguments);
  // let varArgs= Array.from(arguments);    -- Another version of the operation

  // Destructive operation that just preserve the arguments
  varArgs.shift();
  
  //Returns an array with the elements that have passed the test
  return arr.filter(element => !varArgs.includes(element));
    
}

