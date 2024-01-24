var sum = 0
var sumArray = (array) => {
    var counterEvenNumbers = 0
    for (var i = 0; i < array.length; i++) {

        if (array[i] > 0) {
            sum += array[i]
            counterEvenNumbers += 1
        }
    }
    var numbers = sum / counterEvenNumbers
    console.log(numbers)
}
var allNumbers = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8]
sumArray(allNumbers)

var sumArray2 = (array) => {
    for (var i of array) {
        if (i % 2 === 0) {
            sum += i * i
        }
    }
    return sum
}
var t = [123, 24, 454, 46, 56, 76, 89]
console.log(sumArray2(t))


var word = []
var words = (string) => {
    for (var i of string) {
        if (i.includes('a') || i.includes('A') || i.includes('t') || i.includes('T')) {
            word.unshift(i)
        }
    }
    return word
}
var w = ['dad', 'well', 'apple', 'tom', 'upp']
console.log(words(w))