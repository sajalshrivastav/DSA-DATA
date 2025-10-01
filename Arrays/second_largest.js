let number = [14, 9, 0, 2, 8, 7, 1];

let result = secondLargest(number)
console.log("result ", result);

function secondLargest(arr) {

    let first = -Infinity
    let second = -Infinity


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second) {
            second = arr[i]
        }
    }
    return { first, second };

}