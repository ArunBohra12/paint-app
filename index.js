import PaintBoard from './js/paintBoard.js';

const clearButton = document.getElementById('clear-board');
const colorPicker = document.getElementById('color-picker');
const thicknessDropdown = document.getElementById('paint-thickness');

const paintingCanvas = new PaintBoard();

// Clear canvas
clearButton.addEventListener('click', function() {
  const isUserSure = confirm('Are you sure?');

  if (isUserSure) paintingCanvas.clear();
});

// Change canvas paint color
colorPicker.addEventListener('input', function() {
  paintingCanvas.color = this.value;
});

// Change paint thickness
thicknessDropdown.addEventListener('change', function() {
  paintingCanvas.thickness = Number(this.value) || 1;
});
