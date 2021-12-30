const div$$ = document.querySelector(".container");
const input$$ =document.querySelector("input")
const allPoke = [] 
const arrayPoke = () => {

    if (allPoke.length ===0) {
    for (let i = 1; i <= 151; i++) {
    const baseDatos =  `https://pokeapi.co/api/v2/pokemon/${i}`;
    allPoke.push(fetch(baseDatos).then((res) => res.json()));
    
  }}

  Promise.all(allPoke).then((results) => {
    const filteredCharacters = results.filter((poke) =>
    poke.name.toLowerCase().includes(input$$.value.toLowerCase())||
    poke.id==(input$$.value));
    print(filteredCharacters);
   
  });
  
};
const print = (allPoke) => { 
    div$$.innerHTML="";
    for (const poke of allPoke) {
    const ul$$ = document.createElement("ul");
    ul$$.innerHTML =`<li><h3 id="contenido"> name: ${poke.name}</h3></li>
         <li><img id="contenido" src="${poke.sprites["front_default"]}"/></li>
         <li><p id="contenido">ID: ${poke.id}</p></li>
         <li>Experience: ${poke.base_experience}</li>
         <li>Height: ${poke.height / 10} M</li>
         <li>Weight: ${poke.weight / 10} KG</p></li>`
    div$$.appendChild(ul$$);
  }
};

arrayPoke();

input$$.addEventListener("input",arrayPoke);