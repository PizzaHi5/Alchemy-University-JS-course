const ORDER_TYPES = require('./enums');

function numberOfPizzas(orders) {
    let count = 0;
    for(let i = 0; i < orders.length; i++) {
        if(orders[i]['type'] === ORDER_TYPES.PIZZA) {
            count += orders[i]['pizzas'];

        }
    }
    return count;
}

module.exports = numberOfPizzas;