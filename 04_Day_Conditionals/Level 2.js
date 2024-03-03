// 04_Day_Conditionals
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/04_Day_Conditionals/04_day_conditionals.md
// ----------------------------------------------------------------

// 1
let percentage = prompt('Enter a percentage:')
if (percentage >= 90) {
    alert('You got A!')
} else if (percentage >= 70 && percentage <= 89) {
    alert('You got B!')
} else if (percentage >= 60 && percentage <= 69) {
    alert('You got C!')
} else if (percentage >= 50 && percentage <= 59){
    alert('You got D!')
} else if (percentage <= 49) {
    alert('You got F!')
}

// 2
let month = prompt('Type month:').toLowerCase()
if (month === 'september' || month === 'october' || month === 'november') {
    alert('It is Autumn.')
} else if (month === 'december' || month === 'january' || month === 'february') {
    alert('It is Winter.')
} else if (month ==='march' || month === 'april' || month ==='may') {
    alert('It is Spring.')
} else if (month === 'june' || month === 'july' || month === 'august') {
    alert('It is Summer.')
} else {
    alert('Invalid month.')
}

// 3
let day = prompt('What is the day today?').toLowerCase()
if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
    alert(`${day} is a working day.`)
} else if (day === 'saturday' || day === 'sunday') {
    alert(`${day} is a weekend.`)
} else {
    alert('Invalid day.')
}