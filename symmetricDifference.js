/*
 * Given 2 arrays, return a new array with the different elements in each one
 *  
 */
 "use strict";

function diffArray(arr1, arr2) {
  let newArr = [];

  // It's not necessary to slice them, but just in case I would like to do something with them later
  let longerOrFirstArr= (arr1.length >= arr2.length)? 
    arr1.slice() 
  : arr2.slice();

  let smallerOrSecondArr= (arr1.length < arr2.length)? 
    arr1.slice() 
  : arr2.slice();


  // Return the elements from the longerOrFirstArr that are not in the smallerOrSecondArr
  newArr= longerOrFirstArr.filter(
              element => 
                !smallerOrSecondArr.includes(element)
                );

  // Add the elements in newArr from the smallerOrSecondArr that are not in the longerOrFirstArr
  smallerOrSecondArr.forEach(element => {
                                  if(!longerOrFirstArr.includes(element)){

                                    newArr.push(element)
                                  }
                            });
  
  return newArr;
}
