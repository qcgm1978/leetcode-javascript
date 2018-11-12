module.exports = (int) => {
    return +int.toString().split('').reverse().join('') === int
}