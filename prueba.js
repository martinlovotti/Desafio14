
let x = 100000000

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Array para llevar la cuenta de los valores
let valueAppearances = [];

// inicializo el array con la cuenta de los valores en cero
for (let index = 1; index <= 1000; index++) {
  valueAppearances.push({ valor: index, apariciones: 0 });
}

// saco aleatorios x cantidad de veces
for (let i = 0; i <= x; i++) {
  // obtengo el aleatorio entre 1 y 1000
  let randomIndex = random(1, 1000);
  // incremento las apariciones de este valor
  valueAppearances[randomIndex - 1].apariciones++;
  ;
}

console.log(valueAppearances);