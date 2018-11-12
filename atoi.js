module.exports = (str) => {
    let ret = parseInt(str)
    if (ret >= Math.pow(2, 31)) {
        ret = Math.pow(2, 31) - 1
    } else if (ret <= -Math.pow(2, 31)) {
        ret = -Math.pow(2, 31)
    }
    return isNaN(ret) ? 0 : ret
}