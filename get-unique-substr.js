/**
 * @param {string} s
 * @return {number}
 */


module.exports = {
    reduceMethod(s) {
        if (s === null || s.length === 0) {
            return 0;
        }
        const { maxLen, str, start } = s.split('').reduce((accumulator, item, index) => {
            if (accumulator.map[item] !== undefined && accumulator.map[item] >= accumulator.start) {
                accumulator.start = accumulator.map[item] + 1; // start new search with repeated word's last location + 1
                accumulator.len = index - accumulator.start; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
            }
            accumulator.len++; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later

            if (accumulator.len > accumulator.maxLen) {
                accumulator.maxLen = accumulator.len;
                accumulator.str = s.slice(accumulator.start, accumulator.maxLen)
            }

            accumulator.map[item] = index;
            return accumulator
        }, {
                map: {},
                len: 0,
                maxLen: 0,
                start: 0,
                str: ''
            })
        return { maxLen, str }

    }
}

// const { maxLen, str } = s.split('').reduce((accumulator, item, index) => {
//     if (accumulator.map[item] !== undefined && accumulator.map[item] >= accumulator.start) {
//         accumulator.start = accumulator.map[item] + 1
//         accumulator.len = index - accumulator.start
//     }
//     accumulator.len++
//     if (accumulator.len > accumulator.maxLen) {
//         accumulator.maxLen = accumulator.len;
//         accumulator.str = s.slice(accumulator.start, accumulator.maxLen)
//     }

//     accumulator.map[item] = index;
//     return accumulator
// }, {
//         map: {},
//         len: 0,
//         maxLen: 0,
//         start: 0,
//         str: ''
//     })