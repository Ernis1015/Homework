//Задание 1
var numbers = [34, 65, 67, 89, 8, 9, 23, 21, 10, 23, 28]
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}

//Задание 2
var movieHouse = {
    FightClub: {
        genre: 'Криминал',
        premiereDate: '15 октября 1999г.',
        duration: '2 ч 19 мин',
        mainActors: 'Эдвард Нортон, Брэд Питт, Хелена Бонем Картер',
        ticketPrice: '150 com',
        measurement: '3D',
    },
    OpenGamer: {
        genre: 'drama',
        premiereDate: '21 июля 2023г',
        duration: '3 h',
        mainActors: 'Cillian Murphy, Emily Blunt, Robert Downey Jr.',
        ticketPrice: '350 com',
        measurement: '3D',
    }
}
console.log(movieHouse.FightClub)
console.log(movieHouse.OpenGamer)

//Задание 3
var number = Number(prompt('Введите число до 15'))

var convertedAmount = 0

switch (number) {
    case (1):
        convertedAmount = 'I';
        break
    case (2):
        convertedAmount = 'II';
        break
    case (3):
        convertedAmount = 'III';
        break
    case (4):
        convertedAmount = 'IV';
        break
    case (5):
        convertedAmount = 'V';
        break
    case (6):
        convertedAmount = 'VI';
        break
    case (7):
        convertedAmount = 'VII';
        break
    case (8):
        convertedAmount = 'VIII';
        break
    case (9):
        convertedAmount = 'IX';
        break
    case (10):
        convertedAmount = 'X';
        break
    case (11):
        convertedAmount = 'XI';
        break
    case (12):
        convertedAmount = 'XII';
        break
    case (13):
        convertedAmount = 'XIII';
        break
    case (14):
        convertedAmount = 'XIV';
        break
    case (15):
        convertedAmount = 'XV';
        break
    default:
        console.warn('ОШИБКА! вы ввели не правильное число');
}

console.log(number + ' - ' + convertedAmount);

