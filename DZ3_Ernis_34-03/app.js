var list = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']

var object = {}

for (var i = 0; i < list.length; i++) {
    var listA = list[i]
    if (object[listA]) {
        object[listA] += 1
    } else {
        object[listA] = 1
    }
}
console.log(object)

var first = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76]
var second = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54]

var array = []

for (var i = 0; i < first.length; i++) {
    if(second.includes(first[i]) && !array.includes(first[i])){
        array.unshift(first[i])
    }
}
console.log(array)