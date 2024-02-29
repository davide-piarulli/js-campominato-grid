const gridContainer = document.getElementById('grid-container');
reset();


for (let i = 1; i <= 100; i++) {
  const square = getSquare();
  console.log(square);
  gridContainer.append(square);
}

// FUNCTION
function reset() {
  gridContainer.innerHTML = '';
}

function getSquare(){
  const sq = document.createElement('div');
  sq.className = 'square';
  // sq.innerHTML = numero;

  return sq;
}