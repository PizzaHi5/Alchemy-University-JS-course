function shortestString(str1, str2) {
    let count1 = 0;
    let count2 = 0;
    for(let char in str1) {
        count1++;
    }

    for(let char2 in str2) {
        count2++;
    }

    if(count1 < count2) {
        return str1;
    } else {
        return str2;
    }

}

module.exports = shortestString;