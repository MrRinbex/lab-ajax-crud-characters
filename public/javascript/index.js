const charactersAPI = new APIHandler('http://localhost:8000');
const block = document.querySelector('.characters-container')
const btn1 = document.querySelector('.characters-container')
const characterId = document.querySelector('.operation input[name="character-id"]');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    let newBlock = "";
    charactersAPI.getFullList().then((el)=>{
      el.data.forEach(character => {
        const {name,occupation,weapon, cartoon} = character
        newBlock += 
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

  document.getElementById('fetch-one').addEventListener('click',  function (event) {
    let newBlock = "";
     charactersAPI.getOneRegister(characterId.value).then((el)=>{
        const {name,occupation,weapon, cartoon} = el.data
        newBlock += 
        `<div class="character-info">
        <div class="name">Character Name: ${name}</div>
        <div class="occupation">Character Occupation: ${occupation}</div>
        <div class="cartoon">Is a Cartoon? ${cartoon}</div>
        <div class="weapon">Character Weapon: ${weapon}</div>
      </div>`
      block.innerHTML = newBlock
      })
    .catch(err =>console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let newBlock = "";
    charactersAPI.deleteOneRegister(characterId.value).then((el)=>{
       const {name,occupation,weapon, cartoon} = el.data
       newBlock += 
       `<div class="character-info">
       <div class="name">Character Name: ${name}</div>
       <div class="occupation">Character Occupation: ${occupation}</div>
       <div class="cartoon">Is a Cartoon? ${cartoon}</div>
       <div class="weapon">Character Weapon: ${weapon}</div>
     </div>`
     block.innerHTML = newBlock
     })
   .catch(err =>console.log(err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });
 // blocked here
  document.getElementById('new-character-form').addEventListener('submit',function (event) {
    event.preventDefault()
    const nameInput = document.querySelector('.field input[name="name"]').value;
    const occupationInput = document.querySelector('.field input[name="occupation"]').value;
    const weaponInput = document.querySelector('.field input[name="weapon"]').value;
    const cartoonInput = document.querySelector('.field input[name="cartoon"]').value;
    console.log("test1")
    charactersAPI.then((data) => {
      console.log("test2")
      const id = data[data.length - 1].id + 1;
      charactersAPI.createOneRegister({
        id : id,
        name : nameInput,
        occupation : occupationInput,
        weapon : weaponInput,
        cartoon : cartoonInput
      })
    })
    .catch((err) => console.log(err));
  })
});


