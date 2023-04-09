const removeFromArray = function(phrase, ...arg) {
    let newPhrase = [];
    phrase.forEach((item) => {
        if(!arg.includes(item)) {
            newPhrase.push(item);
        }
       });   return newPhrase;
    };

// Do not edit below this line
module.exports = removeFromArray;