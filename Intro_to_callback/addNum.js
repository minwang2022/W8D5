const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function addNumbers(sum, numsLeft, completionCallback) {

    if (numsLeft > 0 ) {
        reader.question('Please input a number:   ', function(answer) {
            let parsedNum = parseInt(answer);
            sum += parsedNum;
            numsLeft -= 1;
            console.log(`Subtotal Sum: ${sum}`);
            
            addNumbers(sum, numsLeft, completionCallback);
        
        
        });

    } else {
        completionCallback(sum);
        reader.close();
    }  
   
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));







