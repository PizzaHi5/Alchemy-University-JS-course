function carCrossing(aCrossing, bCrossing) {
    return !(aCrossing && bCrossing) && aCrossing + bCrossing > 0;
}

module.exports = carCrossing;