'use strict';

// We want to create a list which has (all the values from 2 
// separate lists) and (removing any duplicates) and (sorted in 
// an asscending order).

// pseudo code
// Create a list with all values
// Remove duplicates
// Sort list in asscending order

const array1 = [1, 2, 3, 5, 6];
const array2 = [2, 3, 4, 5, 7];

const mergeLists = (list1, list2) => {
  try {
    if(typeof list1 === 'undefined')
    {
      throw new Error('no parameters provided');
    }
  
    if(typeof list2 === 'undefined')
    {
      throw new Error('Second parameter not provided');
    }
    return [...list1, ...list2];
  }
  catch(err) {
    throw new Error(err);
  }
};

const removeDuplicates = (list) => {
  const cleanedArray = [];
  list.forEach((element) => {
    if (!cleanedArray.includes(element)) {
      cleanedArray.push(element);
    }
  });

  return cleanedArray;
};

const sortList = (list) => {
  return list.sort((a, b) => {
    return a - b;
  });
};

// Functional Approach
const tidyList = sortList(removeDuplicates(mergeLists(array1, array2)));
console.log(tidyList);
module.exports = {mergeLists, removeDuplicates, sortList}

// Object Oriented Approach
// const mergedList = mergeLists(array1, array2);
// console.log(mergedList);

// const cleanedList = removeDuplicates(mergedList);
// console.log('cleanedList', cleanedList);

// const sortedList = sortList(cleanedList);
// console.log('sortedList', sortedList);

// from both arrays without any duplicates
// option 1 update existing array to contain numbers from other array
// option 2 create new array with combination from both existing arrays
// immutable

// we are using the spread operator to merge the value of the 2
// arrays into a newly created array called mergedArray

// mergedArray=[1,2,3,5,6,2,3,4,5,7]

// we now have a single array with all numbers

// it also has duplicates so we need to remove them

// const mergedArray=[...array1, ...array2];
// mergedArray=[1,2,3,5,6,2,3,4,5,7]
// const cleanedArray = removeDuplicates([...array1, ...array2]);

// array1.forEach(element => {
//   if(/* element is not in array add to array */) {

//   }
//   console.log(element)
// });

// //to merge the 2 arrays together
// let array3=array1.concat(array2)
// //to remove duplicates
// let array4=[]

// for(i = 0;i < array3.length;i++){
//   if(array4.indexOf(array3[i])=== -1){
//     array4.push(array3[i])
//   }
// }
// array4.sort(compareFunction)
// function compareFunction(a,b){
//   return a - b
// }
// console.log(array4)

//method 2

// function compareFunction(a,b){
//   return(a - b)
// }
// let array3=array1.concat(array2)
// array3.forEach(compareFunction)
// console.log(array3)
