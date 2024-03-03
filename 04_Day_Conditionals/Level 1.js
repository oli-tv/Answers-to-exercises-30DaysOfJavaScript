// 04_Day_Conditionals
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/04_Day_Conditionals/04_day_conditionals.md
// ----------------------------------------------------------------

// 1
let inputAge = prompt('Enter your age:')
if (inputAge >= 18) {
    alert('You are old enough to drive')
} else {
    let wait = 18 - inputAge
    alert(`You are left with ${wait} years to drive.`)
}

// 2
let yourAge = prompt('Enter your age:')
let myAge = 14
if (yourAge > myAge) {
    alert(`You are ${yourAge - myAge} years older than me.`)
} else {
    alert(`You are ${myAge - yourAge} years younger than me.`)
}

// 3
let a = 4
let b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
}
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`)

// 4
let number = prompt('Enter a number:')
if (number % 2 === 0) {
    alert(`${number} is an even number.`)
} else {
    alert(`${number} is an odd number.`)
}