const reverseString = function(phrase) {
    let string = phrase.split("");
    let reversed = string.reverse();
    let joined = reversed.join("");
    return joined;
};

// Do not edit below this line
module.exports = reverseString;
