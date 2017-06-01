// Exercise
// Implement custom version of the built-in array map function.
// Yours will take in two arguments. The first will be an array to
// map and the second will be a callback function. The function will
// return a new array based on the results of the callback function.

// Example Output
 var words = ["ground", "control", "to", "major", "tom"];


function map (arr, cb) {
  var newArr = [];
  //replace every element array with new value
  arr.forEach(function(item, index) {
    newArr[index] = cb(item);
  });
return newArr;
}

// console log test example
console.log(map(words, function(word) {
  return word.length;
}));
