//costante costo biglietto per kilometro

const PRICE = 0.21;

//prendo l elemento html dove inserirò il conto totale;

var totalArea = document.querySelector('#total');

var text;

//calcolo il prezzo e aggiungo le eccezioni per  età

function calcPrice(){
  let kilometri = document.querySelector('#kilometri').value;
  let age = document.querySelector('#age').value;
  totalPrice = kilometri * PRICE;
if (age >= 65){
  totalPrice = (totalPrice / 100) * 60;
 }
else if (age < 18){
  totalPrice = (totalPrice / 100) * 80;
 }
  text = "Biglietto valido per " + kilometri + " kilometri al costo di " + totalPrice.toFixed(2) + " euro";
  totalArea.innerHTML = totalPrice.toFixed(2);
  document.getElementById('downloadbutton').style.display="block";
}


// questa funzione fa scaricare un file .txt con alcune info del biglietto,crea scarica e  rimuove un tag <a>


function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
