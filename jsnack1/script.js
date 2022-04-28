/*
  Jsnack 1
  Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
  Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
  {
  varietàZucchina: "Verde",
  pesoZucchina: "50",
  lunghezzaZucchina: "17",
  },
  
  {
  varietàZucchina: "Tonda",
  pesoZucchina: "60",
  lunghezzaZucchina: "16",
  },
  
  {
  varietàZucchina: "Lunga",
  pesoZucchina: "80",
  lunghezzaZucchina: "19",
  },
  
  {
  varietàZucchina: "Gialla",
  pesoZucchina: "90",
  lunghezzaZucchina: "18",
  },
  
  {
  varietàZucchina: "Striata",
  pesoZucchina: "110",
  lunghezzaZucchina: "17",
  },
  
  {
  varietàZucchina: "Romanesca",
  pesoZucchina: "70",
  lunghezzaZucchina: "16",
  },
  
  {
  varietàZucchina: "Nera",
  pesoZucchina: "100",
  lunghezzaZucchina: "17",
  },
  
  {
  varietàZucchina: "Bianca",
  pesoZucchina: "120",
  lunghezzaZucchina: "19",
  },
  
  {
  varietàZucchina: "Trombetta",
  pesoZucchina: "130",
  lunghezzaZucchina: "20",
  },
  
  {
  varietàZucchina: "Alberello",
  pesoZucchina: "150",
  lunghezzaZucchina: "25",
  },
]


sumPeso();

function sumPeso() {
  let sum = 0;

  for (let i of zucchine) {
    sum += parseInt(i.pesoZucchina);
  }

  document.getElementById("somma-zucchine").innerHTML = sum;
  console.log(sum);

}
  

