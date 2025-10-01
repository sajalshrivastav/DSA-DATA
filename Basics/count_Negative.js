let mixNumber = [10, 4, -99, 53, 28, -5, 3, -17]


console.log(coountNegative(mixNumber))

function coountNegative(arr) {

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }

    }
    return count;

}