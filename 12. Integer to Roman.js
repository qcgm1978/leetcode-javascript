const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
const getKeyByValue = (value) => {
    return Object.keys(symbols).find(key => symbols[key] === value);
}
module.exports = function (num) {
    const baseArr = Object.entries(symbols).sort((a, b) => a[1] - b[1]).map(item => item[0])
    const values = Object.values(symbols).sort((a, b) => a - b)
    const maxUnit = values.slice(-1)[0]
    let ret = '', lastUnit = baseArr.slice(-1)[0], maxUnitNum = parseInt(num / maxUnit)
    if (maxUnitNum >= 1) {
        ret = lastUnit.repeat(maxUnitNum)
    }
    const remainder = num % maxUnit
    const arr = remainder.toString().split('').map(item => +item)
    const Roman = arr.reduce((accumulator, item, index) => {
        const remainder = item % 5
        const key = baseArr[arr.length - index - 1]
        const keyNext = baseArr[arr.length - index]
        const keyNext2 = baseArr[arr.length - index + 1]
        if (remainder === 4) {
            accumulator += baseArr[0] + (item > 5 ? keyNext2 : keyNext)
        } else {
            if (item > 5) {
                accumulator += keyNext + key.repeat(item - 5)
            } else if (item === 5) {
                accumulator += keyNext2 + key.repeat(item - 5)
            } else {
                accumulator += key.repeat(item)
            }
        }
        return accumulator
    }, ret)
    return Roman

};