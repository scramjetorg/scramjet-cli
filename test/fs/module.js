module.exports = (stream) => {
    return stream
        .lines()
        .parse((x) => parseInt(x))
        .until(x => isNaN(x))
        .reduce((acc, value) => (acc + value), 0)
    ;
}
