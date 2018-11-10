const math = require('mathjs');
module.exports = (x) => {
    const arr = Math.abs(x).toString().split('')
    const ret = +arr.reverse().join('')
    if (ret > Math.pow(2, 31) || ret < Math.pow(-2, 31) - 1) {
        return 0
    }
    return x > 0 ? ret : -ret
}