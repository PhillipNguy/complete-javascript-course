let bill = 40;
let tip = 300 >= bill && bill >= 50 ? bill * 0.15 : bill * 0.20
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

if (bill >= 50) {
    console.log(true)
} else {
    console.log(false)
}