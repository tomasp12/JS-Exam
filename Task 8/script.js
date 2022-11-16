/*  ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.sum = (a, b) => a + b;
  this.subtraction = (a, b) => a - b;
  this.multiplication = (a, b) => a * b;
  this.division = (a, b) => a / b;
}

const calculator = new Calculator;

console.log('5 + 6 = ' + calculator.sum(5, 6)); //5 + 6 = 11
console.log('5 - 6 = ' + calculator.subtraction(5, 6)); //5 - 6 = -1
console.log('5 * 6 = ' + calculator.multiplication(5, 6)); //5 * 6 = 30
console.log('5 : 6 = ' + calculator.division(5, 6));//5 : 6 = 0.8333333333333334