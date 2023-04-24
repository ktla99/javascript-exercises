const findTheOldest = function() {
    const age = people.reduce((total, person) => {
        return total + (people.yearOfDeath - people.yearOfBirth);
        }, 0);    
};

// Do not edit below this line
module.exports = findTheOldest;
