// Question ) Given an array which only contains 0 and 1  the data is  shuffled randomly write a function rearranging the 0's and 1's in such a way that all zeros are in left side and all 1's are in right side

// For Example array [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1]
// [  0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]



function seperate(arr) {
    let i = 0;
    let j = arr.length - 1

    while (i <= j) {
        if (arr[i] === 1) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            j--;
        } else {
            i++;
        }

    }

}


let arrays = [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1];
seperate(arrays);

console.log(arrays)