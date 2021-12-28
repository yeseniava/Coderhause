function createCard(name){
let cards = document.getElementById("showStores");
cards.insertAdjacentHTML('beforeend', `
    <div class="card">
    <h5 class="card-header">Tienda:</h5>
    <div class="card-body">
    <h5 class="card-title"> ${name}</h5>
    </div>
    </div>
`);
}

var input = document.getElementById("store");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   createCard(input.value);
   input.value = "";
  }
});