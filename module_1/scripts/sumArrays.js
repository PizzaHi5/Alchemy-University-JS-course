function sumTogether(arr1, arr2) {
    const arr3 = [];
    for(let i = 0; i < arr1.length; i++) {
        arr3[i] = arr1[i] + arr2[i];
    }
    return arr3;
}

module.exports = sumTogether;