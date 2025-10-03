

function isPalindrome(data) {

    let actualData = data
    let reverse = 0

    while (actualData > 0) {
        let temp = actualData % 10  // last digit milega 
        reverse = (reverse * 10) + temp;
        actualData = Math.floor(actualData / 10)
    }

    console.log("Reverse data is ", reverse)
    return reverse === data;

}
// isPalindrome(123)
console.log("sPalindrome(123) ", isPalindrome(123));