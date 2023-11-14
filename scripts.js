const base = +prompt("Please enter the base number:")
const power = +prompt("Please enter the power number:")
let finalAnswer = 1
let temp;

if(base < 0 || isNaN(base) || power < 0 || isNaN(power)) {
    alert('Please Enter A Valid Number:')
} else {
    for (let i = 0; i < power; i++) {
        temp = 0
        for (let j = 0; j < base; j++) {
            temp += finalAnswer
        }
        finalAnswer = temp
    }

    alert(finalAnswer)
}
