const palindromes = function (phrase) {
    let string = phrase.split("");
    let reversed = string.reverse();
    let joined = reversed.join("");
    if(phrase === joined) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
