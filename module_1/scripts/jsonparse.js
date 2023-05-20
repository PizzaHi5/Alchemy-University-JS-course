const personJSON = `
    {
        "name": "hmm",
        "age": 23,
        "isReal": false
    } 
`;

const person = JSON.parse(personJSON);
console.log(person.name);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
module.exports = personJSON;