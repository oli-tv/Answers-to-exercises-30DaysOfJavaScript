// 01_Introduction
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/01_Introduction/
// ----------------------------------------------------------------
const regex = /\d+/g
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let income = 0
for (incomes of text.match(regex)) {
    income += parseInt(incomes)
}
console.log(income)