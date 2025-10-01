let elements = [10, 5, 53, 2, 7, 33, 88];
let searchElement = 55;

console.log(searchTheElement(elements, searchElement))

function searchTheElement(arr, ele) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true;
        }
    }
    return false

}