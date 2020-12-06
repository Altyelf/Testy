//## Exercise #14
//
//Turn an array of numbers into a long string of all those numbers.
//
//```javascript


function stringConcat(arr) {
 const num = arr => arr.map(Number);
 console.log(num)
}

console.log(stringConcat([1, 2, 3])); // "123"
