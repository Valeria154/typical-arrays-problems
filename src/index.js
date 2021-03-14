exports.min = function min(array) {
    if (typeof array === 'undefined' || array.length == 0) {
        return 0;
    }
    return Math.min.apply(null, array);
}

exports.max = function max(array) {
    if (typeof array === 'undefined' || array.length == 0) {
        return 0;
    }
    return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
    if (typeof array === 'undefined' || array.length == 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / array.length;
}
