window.onload={}
const url = `http://pokeapi.co/api/v2/pokemon/1`;
const url2 = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'

// fetch(url, {
//     "method": "GET",
// }).then((response) => {
//     return response.json();
// }).then(
//     data => {
//         console.log(data)
//         console.log(data.name)
//         console.log(data.sprites)
//         console.log(data.sprites.front_default)

//      display(data.results);
//     }
// ).catch((err) => {
//     console.log('rejected', err)
// });


// data.sprites= [ 'front_default']

 function display (obj){
 let allitems =document.getElementById("allitems");

     console.log(obj.name);
     console.log(obj.sprites.front_default);

    
    allitems.innerHTML +=
    `<div class="item">
    <img src=`+obj.sprites.front_default+`>
    <h2>`+obj.name+`</h2>
    </div>`

 }

const fetchPokemon = () => {
    for (let i = 0; i <= 18; i++) {
        const url = `http://pokeapi.co/api/v2/pokemon/${i}`;

        fetch(url, {
            "method": "GET",
        }).then((response) => {
            return response.json();
        }).then(
            data => {
                console.log(data)
                // console.log(data.name)
                // console.log(data.sprites)
                // console.log(data.sprites.front_default)
               
                // let allitems =document.getElementById("allitems");
                //  for (i=0 ; i<=19 ; i++ ){
                //      console.log(arr[i]);
                //      console.log(arr[i].sprites);
                //     allitems.innerHTML +=
                //     `<div class="item">
                //     <img src=`+obj[i].sprites.front_default+`>
                //     <h2>`+obj[i].name+`</h2>
                //     </div>`
        
             display(data);
            }
        ).catch((err) => {
            console.log('rejected', err)
        });
        

    }
}

fetchPokemon()




 
    
