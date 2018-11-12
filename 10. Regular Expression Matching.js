module.exports = (s, p) => {
    return new RegExp(`^${p}$`, 'g').test(s)
}