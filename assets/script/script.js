const gridContainer = document.getElementById('grid-container');
reset();

// ciclo con 100 ripetizioni
for (let i = 1; i <= 100; i++) {
  // richiamo la funzione che crea il quadrato
  const square = getSquare(i);
  // assegno square alla griglia
  gridContainer.append(square);
}




/**********FUNCTIONS **********/

// RESET
function reset() {
  gridContainer.innerHTML = '';
}

// CREAZIONE SQUARE
function getSquare(numero){
  // creo il DIV
  const sq = document.createElement('div');
  // associo la classe square
  sq.className = 'square';
  // creo una proprietà custom dell'elemento HTML, creo un suo ID
  sq._sqID = numero;
  // al click di sq restituisci numero
  sq.addEventListener('click', function(){
  // restituisco l'ID in console
  console.log(this._sqID);
  // inserisco ID nello square
  sq.innerHTML = this._sqID;
  // aggiungo la classe clicked allo square
  sq.classList.add('clicked');
  })

  return sq;
}