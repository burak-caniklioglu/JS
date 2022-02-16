/*Purpose of the this coding challenge is to write a code that given TR Identity Number, returns valid or invalid.

Valid TR Identity Number must follow these rules:
TR Identity Number actually consists of 9 digits, the last 2 digits have been added for control/verification purposes.
The ID number cannot start with 0.
The 10th digit is obtained by using the first 9 digits, and the 11th digit is obtained by using the first 10 digits.
Add the digits in the 1st, 3rd, 5th, 7th and 9th digits, multiply by 7 and subtract the sum of the digits in the 2nd, 4th, 6th and 8th digits.
The units digit of the result obtained (mod 10) gives the 10th digit of the ID number.
When we add the first 9 digits of the ID number and the 10th digit obtained by the above method, the ones digit (mod 10) gives the 11th digit.*/


let check = (num) => {
    let sumOdd = 0

    for(let i = 0; i<9 ; i += 2){
        sumOdd += +num[i]
    }
    
    let sumEven = 0
    for(let i = 1; i<8 ; i += 2){
        sumEven += +num[i]
    }
    let nine = (sumOdd * 7 - sumEven) % 10
    let ten = (sumOdd + sumEven + nine) % 10
    if(!num.startsWith(0) && num[9] == nine && num[10] == ten){
        return true
    }else{
        false
    }
}

console.log(check("34444185856"))
console.log(check("10880383988"))
