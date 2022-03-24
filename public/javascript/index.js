const charactersAPI = new APIHandler('http://localhost:8000');
const block = document.querySelector('.characters-container')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    let newBlock = "";
    charactersAPI.getFullList().then((el)=>{
      el.forEach(character => {
        const {name,occupation,weapon, cartoon} = character
        newBlock.innerHTML += 
        `<div class="character-info">
        <div class="name">Character Name: ${name}</div>
        <div class="occupation">Character Occupation: ${occupation}</div>
        <div class="cartoon">Is a Cartoon? ${cartoon}</div>
        <div class="weapon">Character Weapon: ${weapon}</div>
      </div>`
      });
       block.innerHTML = newBlock
    })
    .catch(err =>console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
