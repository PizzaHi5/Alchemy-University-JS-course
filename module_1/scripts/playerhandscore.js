function playerHandScore(hand) {
    let count = 0;
    for(let i = 0; i < hand.length; i++) {
        if(hand[i] === 'K') {
            count += 4;
        } else if(hand[i] === 'Q') {
            count += 3;
        } else {
            count += 2;
        }
    }
    return count;
}

module.exports = playerHandScore;