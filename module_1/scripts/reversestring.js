function reverse(string) {
    let count = 0;
    const newString = [];
    for(let i = 0; i < string.length; i++) {
        newString[i] = string[string.length - 1 - i];
    }
    // found that array.reverse() is also a thing
    return newString.join("");
}

module.exports = reverse;