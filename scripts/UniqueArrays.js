function unique(array) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        //console.log(array[i]);
        if(newArray.indexOf(array[i]) < 0) {
            let value = array[i];
            newArray.push(value);
            console.log(value);
        }
    }

    let isContained = array.indexOf(3) >= 0;
    return newArray;
}

module.exports = unique;