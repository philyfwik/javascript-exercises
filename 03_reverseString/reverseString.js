const reverseString = function(string) {
    // let newString = '';

    // for (let i=1; i<=string.length; i++) {
    //     newString += string.charAt(string.length-i);
    // }

    // return newString;
    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
