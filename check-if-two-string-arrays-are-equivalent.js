/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    var firstString = word1.join('');
    var secondString = word2.join('');
    
    if (firstString == secondString) {
        return true;
    } else {
        return false;
    }
    
};