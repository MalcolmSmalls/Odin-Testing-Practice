const capitalize = str => {
    return str[0].toUpperCase() + str.substring(1)
}

console.log(capitalize('juice'))

module.exports = capitalize