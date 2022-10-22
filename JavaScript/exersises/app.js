function reverseAnumber(num) {
    const numString = num.toString()
    return Number(numString.split("").reverse().join(""))

}

// console.log(reverseAnumber(123))

function isPallindrom(str) {
    try {
        const reversed = str.split("").reverse().join("")
    if (str === reversed) {
        return true
    } else {
        return false
    }
    } catch (e) {
        return `${e}: ${str} is not a String`
    }
}

console.log(isPallindrom('Hello'))
console.log(isPallindrom('ollo'))
console.log(isPallindrom(2))