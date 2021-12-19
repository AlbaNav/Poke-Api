const div$$ = document.querySelector(".container");
const arrayPoke = () => {
  const allPoke = [];
    
  for (let i = 1; i <= 151; i++) {
    const baseDatos =  `https://pokeapi.co/api/v2/pokemon/${i}`;
    allPoke.push(fetch(baseDatos).then((res) => res.json()));
  }

  Promise.all(allPoke).then((results) => {
    print(results);
  });
};

const print = (pokemon) => {
  for (const poke of pokemon) {
    const ul$$ = document.createElement("ul");
    ul$$.innerHTML =`<li><h3 id="contenido"> name: ${poke.name}</h3></li>
         <li><img id="contenido" src="${poke.sprites["front_default"]}"/></li>
         <li><p id="contenido">ID: ${poke.id}</p></li>
         <li>Experiencia: ${poke.base_experience}</li>
         <li>Height: ${poke.height / 10} M</li>
         <li>Weight: ${poke.weight / 10} KG</p></li>`
    div$$.appendChild(ul$$);
  }
};

arrayPoke();
