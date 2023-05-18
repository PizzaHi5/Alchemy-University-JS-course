function catchError(fn) {
    try{
        fn();
    } catch(thing) {
        console.log(thing);
        return thing;
    }
    return false;
}

module.exports = catchError;