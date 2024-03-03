// 03_Day_Booleans_operators_date
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md
// ----------------------------------------------------------------

// 1
let firstName = 'Oliwier'
console.log(typeof firstName)
let lastName = 'Trela'
console.log(typeof lastName)
let country = 'Poland'
console.log(typeof country)
let city = 'Walbrzych'
console.log(typeof city)
let age = 13
console.log(typeof age)
let isMaried = false
console.log(typeof isMaried)
let year = 2024
console.log(typeof year)

// 2
console.log(typeof '10' == typeof 10)

// 3
console.log(parseInt('9.8') == 10)

// 4
console.log(1 == '1')
console.log('true' == 'true')
console.log(false == '0')

console.log(1 == '0')
console.log('false' == '0')
console.log(true == '0')

// 5
// true
console.log(4 > 3)
// true
console.log(4 >= 3)
// false
console.log(4 < 3)
// false
console.log(4 <= 3)
// true
console.log(4 == 4)
// true
console.log(4 === 4)
// false
console.log(4 != 4)
// false
console.log(4 !== 4)
// false
console.log(4 != '4')
// true
console.log(4 == '4')
// false
console.log(4 === '4')
// false
console.log('python'.length != 'jargon'.length)

// 6
// true
console.log(4 > 3 && 10 < 12)
// false
console.log(4 > 3 && 10 > 12)
// true
console.log(4 > 3 || 10 < 12)
// true
console.log(4 > 3 || 10 > 12)
// false
console.log(!(4 > 3))
// true
console.log(!(4 < 3))
// true
console.log(!(false))
// false
console.log(!(4 > 3 && 10 < 12))
// true
console.log(!(4 > 3 && 10 > 12))
// true
console.log(!(4 === '4'))
// There is no 'on' in both dragon and python
// false
console.log(!('dragon'.includes('on') && 'python'.includes('on')))

// 7
let time = new Date()
console.log(time.getFullYear())
console.log(time.getMonth() + 1)
console.log(time)
console.log(time.getDate())
console.log(time.getHours())
console.log(time.getMinutes())
console.log(Math.round(time.getTime() / 1000))