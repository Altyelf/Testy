//## Exercise #12
//
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
//```javascript
//348597; // => [7,9,5,8,4,3]
//```

function digits(n) {
    var initialArray = (""+n).split('');
    var reversedArray = [];
    for (var i = initialArray.length - 1; i >= 0; i--) {
      reversedArray[i] = parseInt(initialArray.shift(),10);
    }
    return reversedArray;
  }
  
  console.log(digits(348597));