function numberOfKeys(object) {
    let count = 0;
    for(let key in object) {
        console.log(key);
        count++;
    }
    console.log(count);
    return count;
}

module.exports = numberOfKeys;