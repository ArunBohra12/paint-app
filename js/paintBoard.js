class PaintBoard {
  #isPainting = false;
  #currentColor = '#000';
  #lineWidth = 3;

  constructor() {
    const paintBoard = document.getElementById('paint-board');
    this.paintBoard = paintBoard;
    this.ctx = paintBoard.getContext('2d');

    this.#init();
  }

  #init() {
    this.paintBoard.addEventListener('mousedown', this.#onMouseDown.bind(this));
    this.paintBoard.addEventListener('mousemove', this.#onMouseMove.bind(this));
    this.paintBoard.addEventListener('mouseup', this.#onMouseUp.bind(this));
  }

  #draw(e) {
    const ctx = this.ctx;
    if (!this.#isPainting) return;

    ctx.lineWidth = this.#lineWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = this.#currentColor;

    const { x: canvasX, y: canvasY } = this.#getCursorPosition()

    ctx.lineTo(e.clientX - canvasX, e.clientY - canvasY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvasX, e.clientY - canvasY);
  }

  #onMouseDown(e) {
    this.#isPainting = true;
    this.#draw(e);
  }

  #onMouseMove(e) {
    this.#draw(e);
  }

  #onMouseUp(e) {
    this.#isPainting = false;
    this.ctx.beginPath();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.paintBoard.width, this.paintBoard.width);
  }

  #getCursorPosition(e) {
    return {
      x: this.paintBoard.getBoundingClientRect().x,
      y: this.paintBoard.getBoundingClientRect().y
    };
  }

  set color(colorCode) {
    this.#currentColor = colorCode;
  }

  set thickness(size) {
    this.#lineWidth = size * 3;
  }
}

export default PaintBoard;
