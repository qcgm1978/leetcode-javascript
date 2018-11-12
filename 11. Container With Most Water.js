module.exports = (height) => {
    return height.reduce((accumulator, item, index) => {
        const arr = height.slice(index + 1)
        const maxArrVal = arr.reduce((accu, it, i) => {
            const isLarger = accu.val - it > i - accu.ind
            return isLarger ? accu : { val: it, ind: i }
        }, {
                val: 0,
                ind: 0
            });
        return Math.max(accumulator, Math.min(item, maxArrVal.val) * (maxArrVal.ind + 1));
    }, 0)
}