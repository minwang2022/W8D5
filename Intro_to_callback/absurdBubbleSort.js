const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? (yes or no): `, function (answer) { 
    if (answer === 'yes') {
      callback(true);
      // the swapping of the numbers
    } else {
      callback(false);
    };
  });
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
}

// function isGreaterThan(el1, el2) {
//   return el1 > el2;
//   // will return boolean
// }

// OUR TEST: askIfGreaterThan(29, 234, bananas => console.log(`Total Sum: ${bananas}`));

// Once you're done testing askIfGreaterThan with dummy arguments, write this.

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
   if (i == arr.length - 1) {
     debugger
     outerBubbleSortLoop(madeAnySwaps);
     return;
   }
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
      // swapping code isGreaterThan = [true, false]
    if (isGreaterThan === true) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
    }
      i += 1;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop)
    });
}
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.



// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {



  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    debugger
    if (madeAnySwaps === true) {
      i = 0;
      madeAnySwaps = false;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop)
    } else {
      sortCompletionCallback(arr);
      // fully sorted
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([4, 67, 2, 895, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
