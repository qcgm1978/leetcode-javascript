module.exports = (logs) => {
    const ignorIdentifier = logs.sort().reverse()//.map(item => {
    //     const head = item.match(/\S+/)[0]
    //     item = item.replace(/\S+\s/, '')
    //     item = new String(item)
    //     item.head = head
    //     return item
    // })
    const letterLogs = ignorIdentifier.filter(item => /^[a-z]/.test(item)).reverse()
    const digitLogs = ignorIdentifier.slice(0, letterLogs.length - 1)
    return letterLogs.concat(digitLogs.reverse()).map(item => `${item.head} ${item}`)
};