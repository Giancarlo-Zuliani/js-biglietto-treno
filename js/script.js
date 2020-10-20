//costante costo biglietto per kilometro

const PRICE = 0.21;

//prendo l elemento html dove inserirò il conto totale;

var totalArea = document.querySelector('#total');

//calcolo il prezzo e aggiungo le eccezioni per  età

function calcPrice(){
  let kilometri = document.querySelector('#kilometri').value;
  let age = document.querySelector('#age').value;
  let totalPrice = kilometri * PRICE;
if (age > 65){
  totalPrice = (totalPrice / 100) * 60;
 }
else if (age < 18){
  totalPrice = (totalPrice / 100) * 80;
 }
 totalArea.innerHTML = totalPrice.toFixed(2);
}
