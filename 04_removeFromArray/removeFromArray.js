const removeFromArray = function(array, ...argument) {
    /*
    let arr2 = [];
    for (let i=0; i<array.length; i++) {
        if (!argument.includes(array[i]))
            arr2.push(array[i]);
    }
    return arr2;
    */
   let arr2 = array.filter(i => !argument.includes(i));
   return arr2;
};

console.log(removeFromArray([1,2,3,4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
