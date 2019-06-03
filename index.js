// Given an array of numbers, return every pair of numbers that can be added up to a given target.

// Questions?, edge cases
// negative numbers
// whole numbers
// will there always be an answer?
// return the pair of numbers in what data type? integer?
// can the array be empty?
// zeros?

// give an example of problem and solution


function bruteForceTwoSum(array, sum){
  let pair = []
  for(let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
      if(array[i]+array[j]===sum){
        let matching = [array[i], array[j]]
        pair.push(matching)
      }
    }
  }
  return pair
}
