let list = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']

let object = {}
list.forEach(tagName => {
    if (object[tagName]) {
        object[tagName]++
    } else {
        object[tagName] = 1
    }
})
console.log(object)
const word = Object.entries(object)
    .sort((a, b) => b[1] - a[1])
    .reduce((tags, [nameTag, tagCounter]) => {
        tags[nameTag] = tagCounter
        return tags
    }, {})
console.log(word)


function user(name, surname, surnameTwo) {
    const userShort = `${name} ${surname.toUpperCase()[0]}.${surnameTwo.toUpperCase()[0]}.`
    return console.log(userShort)
}
user('Ernis', 'askarbekov','maksatovich')

const book = (bookName) => {
    const filterBooks = bookName.filter(bookTitle=>bookTitle.includes('У') || bookTitle.includes('у'))
    filterBooks.forEach(bookMap=>console.log(bookMap))
}
const allBooks = ['Ужин Герман Кох','Властелин колец','Тёмные начала','Убик Филип Дик']
book(allBooks)

const userTwo = [
    {
        name: 'marlen',
        day: '11',
        month: 'январь',
        year: '2004'
    },
    {
        name: 'мустафа',
        day: '21',
        month: 'май',
        year: '2009'
    },
    {
        name: 'ратбек',
        day: '25',
        month: 'июль',
        year: '1998'
    },
    {
        name: 'турат',
        day: '8',
        month: 'декабрь',
        year: '2007'
    },
    {
        name: 'сезим',
        day: '29',
        month: 'август',
        year: '20011'
    },
    {
        name: 'бегимай',
        day: '12',
        month: 'апрель',
        year: '2003'
    },
    {
        name: 'marlen',
        day: '18',
        month: 'июнь',
        year: '2005'
    }
]
userTwo.forEach(allUser=> console.log(`Пользователь ${allUser.name} родился ${allUser.day} ${allUser.month} ${allUser.year}`))