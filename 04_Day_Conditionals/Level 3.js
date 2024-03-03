// 04_Day_Conditionals
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/04_Day_Conditionals/04_day_conditionals.md
// ----------------------------------------------------------------

// 1
/*Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/
let month = prompt('Enter a month:').toLowerCase()

switch (month) {
    case 'january':
        alert('January has 31 days.')
        break
    case 'february':
        alert('February has 28 days.')
        break
    case'march':
        alert('March has 31 days.')
        break
    case 'april':
        alert('April has 30 days.')
        break
    case'may':
        alert('May has 31 days.')
        break
    case 'june':
        alert('June has 30 days.')
        break
    case 'july':
        alert('July has 31 days.')
        break
    case 'august':
        alert('August has 31 days.')
        break
    case'september':
        alert('September has 30 days.')
        break
    case 'october':
        alert('October has 31 days.')
        break
    case 'november':
        alert('November has 30 days.')
        break
    case 'december':
        alert('December has 31 days.')
        break
    default:
        alert('Invalid month.')
}

// 2
let monthConsideredLeapYear = prompt('Enter a month:').toLowerCase()

switch (monthConsideredLeapYear) {
    case 'january':
        alert('January has 31 days.')
        break
    case 'february':
        let year = prompt('Enter year:')
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            alert('February has 29 days.');
        } else {
            alert('February has 28 days.');
        }
        break
    case 'march':
        alert('March has 31 days.')
        break
    case 'april':
        alert('April has 30 days.')
        break
    case 'may':
        alert('May has 31 days.')
        break
    case 'june':
        alert('June has 30 days.')
        break
    case 'july':
        alert('July has 31 days.')
        break
    case 'august':
        alert('August has 31 days.')
        break
    case 'september':
        alert('September has 30 days.')
        break
    case 'october':
        alert('October has 31 days.')
        break
    case 'november':
        alert('November has 30 days.')
        break
    case 'december':
        alert('December has 31 days.')
        break
    default:
        alert('Invalid month.')
}