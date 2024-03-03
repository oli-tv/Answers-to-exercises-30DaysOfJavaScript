// 03_Day_Booleans_operators_date
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md
// ----------------------------------------------------------------

/*
    Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
        YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

let date = new Date()

let year = date.getFullYear()

date.getMonth() + 1 < 10
    ? month = '0' + (date.getMonth() + 1)
    : month = (date.getMonth() + 1)

date.getDate() < 10
    ? day = '0' + date.getDate()
    : day = date.getDate()

date.getHours() < 10
    ? hour = '0' + date.getHours()
    : hour = date.getHours()

date.getMinutes() < 10
    ? minutes = '0' + date.getMinutes()
    : minutes = date.getMinutes()

console.log(year + '-' + month + '-' + day + ' ' + hour + ':' + minutes)