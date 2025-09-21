let frequencyMapping = {};

function setMapping(data) {
    for (let char of data) {
        if (frequencyMapping[char]) {
            frequencyMapping[char] += 1;
        } else {
            frequencyMapping[char] = 1
        }
    }

}


setMapping("MyNameissajalshrivastav")
console.log("frequencyMapping ", frequencyMapping);