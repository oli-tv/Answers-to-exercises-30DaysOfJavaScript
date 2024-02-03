// 01_Introduction
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/01_Introduction/
// ----------------------------------------------------------------
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleaned = sentence.toLowerCase().replace(/[^a-z ]/gi, '')

let mostFrequentWord = ''
let frequency = 0

for (let word of cleaned.split(' ')) {
    let regex = new RegExp('^'+word+' | '+word+'^| '+word+' ', 'gi')
    if (frequency < cleaned.match(regex).length) {
        frequency = cleaned.match(regex).length
        mostFrequentWord = word
    }
}

console.log(mostFrequentWord)
console.log(frequency)