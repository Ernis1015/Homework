var month = prompt('введите ваш месяц')
var birthday = prompt('введите свое день рождения')

if ('январь' === month && birthday > 1 && birthday < 32) {
    alert( month + ' ' + birthday +'-водолей')
} else if ('февраль' === month && birthday > 1 && birthday < 30) {
    alert( month + ' ' + birthday +'-рыбы')
} else if ('март' === month && birthday > 1 && birthday < 32) {
    alert( month + ' ' + birthday +'-овен')
} else if ('апрель' === month && birthday > 1 && birthday < 31) {
    alert( month + ' ' + birthday +'-телец')
} else if ('май' === month && birthday > 1 && birthday < 32) {
    alert( month + ' ' + birthday +'-близнецы')
} else if ('июнь' === month && birthday > 1 && birthday < 31) {
    alert( month + ' ' + birthday +'-рак')
} else if ('июль' === month && birthday > 1 && birthday < 32) {
    alert( month + ' ' + birthday +'-лев')
} else if ('августь' === month && birthday > 1 && birthday < 32) {
    alert( month + ' ' + birthday +'-дева')
} else if ('сентябрь' === month && birthday > 1 && birthday < 31) {
    alert( month + ' ' + birthday +'-весы')
} else if ('октябрь' === month && birthday > 1 && birthday < 32) {
    alert( month + ' ' + birthday +'-скорпион')
} else if ('ноябрь' === month && birthday > 1 && birthday < 31) {
    alert( month + ' ' + birthday +'-стрелец')
} else if ('декабрь' === month && birthday > 1 && birthday < 32) {
    alert( month + ' ' + birthday +'-козерок')
} else {
    alert('вы ввели не правильные данные, пожалуйста перепроверте!')
}