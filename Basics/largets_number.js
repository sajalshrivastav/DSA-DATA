let mixNumber = [10, 4, -99, 53, 28, -5, 3, -17]

console.log(`Largest Value: ${largest_Number(mixNumber).largestValue} at index position: ${largest_Number(mixNumber).setIndex}`);

function largest_Number(arr) {
    let largestValue = 0;
    let setIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestValue) {
            largestValue = arr[i];
            setIndex = i
        }

    }
    return { largestValue, setIndex };

}