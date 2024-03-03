// 03_Day_Booleans_operators_date
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md
// ----------------------------------------------------------------

// 1
let base = prompt('Enter base: ')
let height = prompt('Enter height: ')
alert('The area of the triangle is: ' + base * height * 0.5)

// 2
let a = parseInt(prompt('Enter a: '))
let b = parseInt(prompt('Enter b: '))
let c = parseInt(prompt('Enter c: '))
alert('The perimeter of the triangle is ' + (a + b + c))

// 3
let length = parseInt(prompt('Enter length: '))
let width = parseInt(prompt('Enter width: '))
let area = length * width
let perimeter = 2 * (length + width)
alert('Area: ' + area + '\nPerimeter: ' + perimeter)

// 4
let radius = parseInt(prompt('Enter radius: '))
let areaCircle = radius ** 2 * 3.14
let circumferenceCircle = radius * 2 * 3.14
alert('Area: ' + areaCircle)
alert('Circumference: ' + circumferenceCircle)

// 5
let m1 = -2 / -1
console.log(m1)

// 6
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10

let m2 = (y2 - y1) / (x2 - x1)
console.log(m2)

// 7
console.log(m1 + '\n' + m2)

// 8
let x = -3
let y = x ** 2 + 6 * x + 9
console.log(y)

// 9
let hours = prompt('Enter hours: ')
let rate = prompt('Enter rate per hour: ')
let earning = hours * rate
alert('Your weekly earning is ' + earing)

// 10
let name = prompt('Enter name: ')
name.length > 7
    ? alert('Your name is long')
    : alert('Your name is short')

// 11
let firstName = 'Oliwier'
let lastName = 'Trela'
firstName.length > lastName.length
    ? console.log('Your first name, ' + firstName + ' is longer than your family name, ' + lastName)
    : console.log('Your first name, ' + firstName + ' is shorter than your family name, ' + lastName)

// 12
let myAge = 10
let yourAge = 25
myAge > yourAge
    ? console.log('I am ' + (myAge - yourAge) + ' years older than you.')
    : console.log('I am ' + (yourAge - myAge) + ' years younger than you.')

// 13
let yearBorn = prompt('Enter birth year: ')
let dateNow = new Date()
let yearsOld = dateNow.getFullYear() - yearBorn
let to18 = 18 - yearsOld
yearsOld >= 18
    ? alert('You are ' + yearsOld + '. You are old enough to drive.')
    : alert('You are ' + yearsOld + '. You will be allowed to drive after ' + to18 + ' years.')

// 14
let yearsOldAsk = prompt('Enter number of years you live:')
let seconds = yearsOldAsk * 365.25 * 24 * 60 * 60
alert('You lived ' + seconds + ' seconds.')

// 15
let currentDate = new Date()
console.log(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes())
console.log(currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes())
console.log(currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes())