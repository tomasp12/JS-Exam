/*  ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

//Click event for element id='btn__element' 
document.querySelector('#btn__element').addEventListener('click', () => {
  document.querySelector('#btn__state').innerHTML = +document.querySelector('#btn__state').innerHTML + 1;
});