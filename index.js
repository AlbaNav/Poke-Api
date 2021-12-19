const div$$ = document.querySelector(".container");
const arrayPoke = () => {
  const allPoke = [];

  for (let i = 1; i <= 151; i++) {
    const baseDatos = `https://pokeapi.co/api/v2/pokemon/${i}`;
    allPoke.push(fetch(baseDatos).then((res) => res.json()));
  }

  Promise.all(allPoke).then((results) => {
    print(results);
  });
};

const print = (pokemon) => {
  for (const poke of pokemon) {
    const div2$$ = document.createElement("div");
    div2$$.innerHTML = `<h3> name: ${poke.name}</h3>
    <img src="${poke.sprites["front_default"]}" max-width="200px"/>
    <p>ID: ${poke.id}</p> <p> Experiencia: ${
      poke.base_experience
    }</p><p> Height: ${poke.height / 10} M</p><p>Weight: ${
      poke.weight / 10
    } KG</p>`;
    div$$.appendChild(div2$$);
  }
};

arrayPoke();
