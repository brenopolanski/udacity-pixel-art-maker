(() => {
  // set global variables
  const $sizePicker  = document.querySelector('#sizePicker');
  const $colorPicker = document.querySelector('#colorPicker');
  const $table = document.querySelector('#pixelCanvas');

  // add listener to select grid size
  $sizePicker.addEventListener('submit', (event) => {
    // prevent page refresh on submit
    event.preventDefault();

    // get input data and draw grid
    const inputWidth = document.querySelector('#inputWidth').value;
    const inputHeight = document.querySelector('#inputHeight').value;
    makeGrid(inputWidth, inputHeight);
  });

  // Draw grid
  function makeGrid(width, height) {
    $table.innerHTML = '';

    for (let row = 0; row < width; row++) {
      let newRow = $table.insertRow();

      for (let cell = 0; cell < height; cell++) {
        // add new cell with listener to change color
        let newCell = newRow.insertCell();

        newCell.onclick = changeColor;
      }
    }
  }

  // change the color of the clicked cell to current color
  function changeColor() {
    this.style.background = $colorPicker.value;
  }
})();
