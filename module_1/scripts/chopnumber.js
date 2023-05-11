function halfValue(numbers) {
    let newArray = [];
    //tried using for(let number in numbers) but was interpreting data as a string
    for(let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        if(numbers[i] % 2 === 0) {
            newArray.push(numbers[i]/2);
        } else {
            newArray.push(numbers[i]/2 + 0.5);
        }
    }
    return newArray;
}

module.exports = halfValue;