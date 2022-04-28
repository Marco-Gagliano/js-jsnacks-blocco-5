/* 
  Jsnack 2
  Crea 10 oggetti che rappresentano una zucchina.
  Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/


const zucchine = [
  {
  varietàZucchina: "Verde",
  pesoZucchina: "50",
  lunghezzaZucchina: "12",
  },
  
  {
  varietàZucchina: "Tonda",
  pesoZucchina: "60",
  lunghezzaZucchina: "16",
  },
  
  {
  varietàZucchina: "Lunga",
  pesoZucchina: "80",
  lunghezzaZucchina: "10",
  },
  
  {
  varietàZucchina: "Gialla",
  pesoZucchina: "90",
  lunghezzaZucchina: "18",
  },
  
  {
  varietàZucchina: "Striata",
  pesoZucchina: "110",
  lunghezzaZucchina: "13",
  },
  
  {
  varietàZucchina: "Romanesca",
  pesoZucchina: "70",
  lunghezzaZucchina: "16",
  },
  
  {
  varietàZucchina: "Nera",
  pesoZucchina: "100",
  lunghezzaZucchina: "10",
  },
  
  {
  varietàZucchina: "Bianca",
  pesoZucchina: "120",
  lunghezzaZucchina: "19",
  },
  
  {
  varietàZucchina: "Trombetta",
  pesoZucchina: "130",
  lunghezzaZucchina: "14",
  },
  
  {
  varietàZucchina: "Alberello",
  pesoZucchina: "150",
  lunghezzaZucchina: "20",
  },
];


const zucchineCorte = [];
const zucchineLunghe = [];

const zucchinePesoCorte = [];
const zucchinePesoLunghe = [];

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.

for (let key in zucchine) {

  const zucchineMisura = zucchine[key];

  zucchine[key] = (zucchineMisura.lunghezzaZucchina >= 15) ? zucchineLunghe.push(zucchineMisura.varietàZucchina) : zucchineCorte.push(zucchineMisura.varietàZucchina);

  // Infine stampa separatamente quanto pesano i due gruppi di zucchine.

  zucchine[key] = (zucchineMisura.lunghezzaZucchina >= 15) ? zucchinePesoLunghe.push(zucchineMisura.pesoZucchina) : zucchinePesoCorte.push(zucchineMisura.pesoZucchina);

}

console.log(zucchineLunghe);
console.log(zucchineCorte);

console.log(zucchinePesoLunghe);
console.log(zucchinePesoCorte);
