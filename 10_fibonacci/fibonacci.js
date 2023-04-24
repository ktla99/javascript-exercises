const fibonacci = function(a) {
    if(a < 0) return "Error";
    if(a === 0) return 0;
    let first = 0;
    let second = 1;
    for (let i = 1; i < a; i++) {
        const start = second;
        second = first + second;
        first = start;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
