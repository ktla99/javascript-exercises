const fibonacci = function(a) {
    const firstNum = 0;
    if(a < 0)
        return "Error";
    for (i = a; i > a + 1; i++) {
        firstNum += a[i];
    }
    return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
