function fizzBuzz(numbers) {
    let fizzbuzz = '';

    for(let i = 0; i < numbers.length; i++) {
        const div3 = numbers[i] % 3;
        const div5 = numbers[i] % 5;
        if(!(div3 && div5) && (div3 || div5)) {
            if(div3 && !div5) {
                fizzbuzz = fizzbuzz.concat('buzz');
            } else {
                fizzbuzz = fizzbuzz.concat('fizz');
            }
        } else if(!(div3 || div5)) {
            fizzbuzz = fizzbuzz.concat('fizzbuzz');
        }
    }
    return fizzbuzz;
}

module.exports = fizzBuzz;