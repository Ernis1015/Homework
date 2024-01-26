let list = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']

let object = {}

for (let i = 0; i < list.length; i++) {
    let listA = list[i]
    if (object[listA]) {
        object[listA] = 1
    } else {
        object[listA] += 1
    }
}

let sorted = object.sort((n1, n2) => n2 - n1)
console.log(sorted)