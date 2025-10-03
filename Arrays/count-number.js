function countDigit() {
    let data = 5674323432
    let count = 0
    while (data > 0) {
        data = Math.floor(data / 10);
        count++
    }

    console.log("count value is", count)
}

countDigit()