/**
 * Takes an array of any depth and return a one dimentional array 
 * containing all the elements 
 * @param {*} arr Array of elements to flatten
 */
function flat(arr, result = []) {
    if (!Array.isArray(arr)) return [arr];

    arr.forEach(el => {
        if (Array.isArray(el)) {
            flat(el, result);
        } else {
          result.push(el);
        }
    });
    
    return result;

}

module.exports = flat;