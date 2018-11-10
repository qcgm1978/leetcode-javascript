/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
module.exports = function (s, numRows) {
    return /\d/.exec(s.replace(/\w/g, 1)).index
    // return 'PAHNAPLSIIGYIR'
};