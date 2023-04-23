const palindromes = function (phrase) {
    let string = phrase.split("");
    let reversed = string.reverse();
    let joined = reversed.join("");
    for(i = 0; i < joined.length; i ++) {
        if(joined.charAt(i) == '!' || joined.charAt(i) == ',' || joined.charAt(i) == ';' || joined.charAt(i) == '.' ||  joined.charAt(i) == '?' || joined.charAt(i) == '-' ||    
        joined.charAt(i) == '\'' || joined.charAt(i) == '\"' || joined.charAt(i) == ':') {
            return joined = true;
             break;
        }
    if(phrase === joined) {
        return true;
    } else {
        return false;
    }
}
};

// Do not edit below this line
module.exports = palindromes;
