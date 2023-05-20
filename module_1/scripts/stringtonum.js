function toNumber(string) {
    if(Number(string)) {
        console.log(string);
        return Number(string);
    } else {
        console.log(string);
        return 0;
    }
}

module.exports = toNumber;