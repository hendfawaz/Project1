window.onload={}
function display(obj) {
   let allitems = document.getElementById("allitems");

    allitems.innerHTML +=
        `<div class="item">
            <img src=` + obj.sprites.front_default +`>

            <h2>` + obj.name.toUpperCase() +
            `</h2>

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                details
            </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                        
                            <div class="modal-body">

                            <p>Type:` + displaytypes(obj) + `</p>

                            <p>height:` + obj.height + `m</p>
                        
                            <p>weight` + obj.weight + `kg</p>
                            <p>Abilities:` + displayAbilities(obj) + `</p>

                            </div>

                    </div>
                </div>
            </div>
        </div>`;
}
 

 function displayAbilities(obj) {
   let AllAbilities = "";
   for (let i = 0; i < obj.abilities.length; i++) {
     AllAbilities += obj.abilities[i].ability.name + ",";
   }
   console.log(AllAbilities);
   return AllAbilities;
 }

 function displaytypes(obj) {
   let types = "";
   for (let i = 0; i < obj.types.length; i++) {
     types += obj.types[i].type.name + ",";
   }
   console.log(types);
   return types;
 }











const fetchPokemon = () => {
for (let i = 1; i <= 18; i++) {
 const url = `http://pokeapi.co/api/v2/pokemon/${i}`;
fetch(url, {
    "method": "GET",
 }).then((response) => {
        return response.json();
 }).then(
 data => {
 display(data);
 }
).catch((err) => {
console.log('rejected', err)
 });
 }       
 }
fetchPokemon() 


// // 




 

