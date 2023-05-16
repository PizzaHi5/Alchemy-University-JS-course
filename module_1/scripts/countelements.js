function countElements(elements) {
    //check if element unique, add to object if is
    //increase counter
    let counts = {};
    for(let i = 0; i < elements.length; i++) {
        let element = elements[i];

        if(counts[element]) {
            counts[element]++;
        } else {
            counts[element] = 1;
        }
    }    
    return counts;
}

module.exports = countElements;