/*  ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

//Function to get users list.
async function getList(link) {
  try {
    const response = await fetch(link);
    if (response.ok) {
      return await response.json();
    }
  }
  catch (error) {
    console.log(error);
  }
}

//Function to manage output.
function showList(dataArray) {
  //Delete message.
  if (document.querySelector('#message')) {
    document.querySelector('#message').remove();
  }
  const outputEL = document.querySelector('#output'); //Get output element.
  //Check if we have created cards, if not create output. 
  if (!document.querySelector('.cards')) {
    const divEl = document.createElement('div');
    divEl.className = 'cards';
    divEl.style.display = 'flex';
    divEl.style.flexWrap = 'wrap';
    divEl.style.justifyContent = 'center';
    output.append(divEl);
    dataArray.forEach(arrayElement => {

      //Make and style card for each element.
      const card = document.createElement('div');
      card.className = 'card';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.alignItems = 'center';
      card.style.border = '1px solid #000000';
      card.style.borderRadius = '3rem';
      card.style.boxShadow = '4px 4px 6px #00000070';
      card.style.padding = '.8rem';
      card.style.width = '8rem';
      card.style.margin = '1rem';
      divEl.append(card);

      //Make and style avatar_url element.
      const avatarUrl = document.createElement('img');
      avatarUrl.src = arrayElement.avatar_url;
      avatarUrl.style.width = '6rem';
      avatarUrl.style.borderRadius = '50%';
      card.append(avatarUrl);

      //make and style login element.
      const login = document.createElement('h1');
      login.style.color = 'black';
      login.style.fontSize = '1rem';
      login.style.marginBottom = '2rem';
      login.textContent = arrayElement.login;
      card.append(login);
    });
  }

}

//Click event on button, function getList return promise, we use async function.
document.querySelector('#btn').addEventListener('click', async () => {
  showList(await getList(ENDPOINT));
});