function numberOfPizzas(orders) {
    let count = 0;
    for(let i = 0; i < orders.length; i++) {
        count += orders[i]['pizzas'];
        // or    orders[i].pizzas;
    }
    return count;
}

module.exports = numberOfPizzas;