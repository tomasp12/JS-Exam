/*  ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = './cars.json';

//Function to get data from ENDPOINT.
async function getData(link) {
  try {
    const response = await fetch(link);
    if (response.ok) {
      showData(await response.json());
    }
  }
  catch (error) {
    console.log(error);
  }
}

//Function to create and style output.
function showData(dataArray) {  
  const containerEl = document.querySelector('#output'); //Get output element.
  //Styling output container.
  containerEl.style.display = 'flex';
  containerEl.style.flexWrap = 'wrap';
  containerEl.style.gap = '2rem';
  containerEl.style.textAlign = 'left';
  containerEl.style.padding = '2rem';
  containerEl.style.maxWidth = '90vw';  
  dataArray.forEach(carElement => {  //Loop for all Cars.  
    const card = document.createElement('div') //Creating card for car.
    card.className = 'card';
    card.style.background = 'grey';
    card.style.borderRadius = '1rem';
    card.style.color = '#ffffff';
    card.style.boxShadow = '4px 4px 10px #00000070';    
    card.addEventListener('mouseover', () => { card.style.boxShadow = 'none' }); //CSS :hover script mouse on element.
    card.addEventListener('mouseleave', () => { card.style.boxShadow = '4px 4px 10px #00000070' }); //CSS :hover script mouse leave element.    
    const h1EL = document.createElement('h1'); //Creating car name.
    h1EL.innerHTML = carElement.brand;
    h1EL.style.textAlign = 'center';
    h1EL.style.paddingBottom = '1rem';
    h1EL.style.padding = '.5rem';
    card.append(h1EL);    
    const ulEL = document.createElement('ul');//Creating unordered list of models.
    ulEL.style.padding = '0 2rem 1rem 1rem';    
    carElement.models.forEach(modelElement => { //Loop for all models of car.
      const liEL = document.createElement('li');
      liEL.innerHTML = modelElement;
      liEL.style.color = '#00ffff';
      liEL.style.listStyle = 'none';      
      liEL.addEventListener('mouseover', () => { liEL.style.color = '#000000'; }); //CSS :hover script mouse on element.
      liEL.addEventListener('mouseleave', () => { liEL.style.color = '#00ffff'; }); //CSS :hover script mouse leave element.
      ulEL.append(liEL);
      card.append(ulEL);
    })
    containerEl.append(card);
  });
}

getData(ENDPOINT); //Starting script.