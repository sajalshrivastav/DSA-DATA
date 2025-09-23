let arrays = [5, 2, 1, 6, 8, 4];

function reverseArray(arr) {
    const checkEven = (arr.length % 2) === 0
    console.log("checkEven ", checkEven);
    let index = 0;
    let lastIndex = arr.length - 1;

    while (index < lastIndex) {
        let temp = arr[index];
        arr[index] = arr[lastIndex];
        arr[lastIndex] = temp;
        index++;
        lastIndex--;
    }

}

reverseArray(arrays)

console.log("Arrays", arrays)