// common system errors in node.js
//https://nodejs.org/api/errors.html#errors_common_system_errors

function catchError(fn) {
    try{
        fn();
    } catch(thing) {
        console.log(thing);
    }
}

module.exports = catchError;