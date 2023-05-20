function eitherNotBoth(num) {
    const num1 = num % 3;
    const num2 = num % 5;
    if((num1 || num2) && !(num1 && num2)) {
        return true;
    } else {
        return false;
    }
}

module.exports = eitherNotBoth;