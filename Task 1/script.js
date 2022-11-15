/*  ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id='output'></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const inputEL = document.querySelector('#search'); // Get input element.

// Array of convert units.
const weightUnits = [
  { measureUnit: 'pounds', value: 2.2046, unitName: 'lb' },
  { measureUnit: 'grams', value: 1000, unitName: 'g' },
  { measureUnit: 'ounces', value: 35.274, unitName: 'oz' },
];

//Function to check string is positive number.
function checkInput(inputString) {
  if (inputString > 0 || !isNaN(+inputString)) return true;
  return false;
}

//Output element for all converting values.
function createOutput(dataArray) {
  const outputEL = document.querySelector('#output');
  const divEl = document.createElement('div');
  divEl.style.width = '70%';
  divEl.style.margin = '4rem auto';
  divEl.style.color = '#317AF9';
  outputEL.append(divEl);
  dataArray.forEach(arrayElement => {
    const h2El = document.createElement('h2');
    h2El.id = arrayElement.measureUnit;
    divEl.append(h2El);
  });
}

//Calculate and output converted values.
function calculateValue(dataArray, inputWeight) {
  dataArray.forEach(arrayElement => {
    document.getElementById(arrayElement.measureUnit).textContent = `
      ${Math.round(+inputWeight * 100) / 100} kg in ${arrayElement.measureUnit}: 
      ${Math.round(inputWeight * arrayElement.value * 1000) / 1000} ${arrayElement.unitName}
    `;
  });
}

//Submit event for form.
document.querySelector('form').addEventListener('submit', (e) => { 
  e.preventDefault();
  if (checkInput(inputEL.value)) {
    createOutput(weightUnits); //Creating DOM element for output.
    calculateValue(weightUnits, inputEL.value); //Calculate measure units.
  } else {
    alert('Error. Please input positive number.'); //Make alert if input isn't number or it is negative.
  }
  inputEL.focus(); //Set active input element.
  inputEL.select(); //Select value in input element.
});

