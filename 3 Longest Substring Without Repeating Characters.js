/**
 * @param {string} s
 * @return {number}
 */


module.exports = {
    forMethod: function (s) {
        if (s === null || s.length === 0) {
            return 0;
        }

        var map = {};
        var len = 0;
        var maxLen = 0;
        var start = 0;
        let str = ''
        // scan from left to right.    
        for (var i = start; i < s.length; i++) {
            c = s[i];

            if (map[c] !== undefined && map[c] >= start) {
                start = map[c] + 1; // start new search with repeated word's last location + 1
                len = i - start; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
            }

            len++; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later

            if (len > maxLen) {
                maxLen = len;
                str = s.slice(start, maxLen)
            }

            map[c] = i;
        }

        return { maxLen, str };
    }
}