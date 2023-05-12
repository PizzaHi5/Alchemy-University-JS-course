function isPalindrome(string) {
    const newString = [];
    for(let i = 0; i < string.length; i++) {
        newString[i] = string[i];
    }
    newString.reverse();
    const newnewString = newString.join("");
    console.log(string);
    console.log(newnewString);
    if(newnewString === string) {
        return true;
    } else {
        return false;
    }
}

module.exports = isPalindrome;