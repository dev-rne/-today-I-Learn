const canvas = document.getElementById('jsCanvas'),
  ctx = canvas.getContext('2d'),
  jsColor = document.getElementsByClassName('controls__color'),
  range = document.getElementById('jsRange'),
  mode = document.getElementById('jsMode'),
  reset = document.querySelector('.reset'),
  saveBtn = document.getElementById('jsSave'),
  showCanvas = document.querySelector('.showCanvas'),
  root = document.querySelector('.root');

const INITIAL_COLOR = '#2c2c2c';

canvas.width = document.body.clientWidth * 0.6;
canvas.height = 400;
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, document.body.clientWidth * 0.6, 400);
ctx.fillStyle = INITIAL_COLOR;
ctx.lineJoin = 'round';

let painting = false;
let filling = false;
let showing = false;

const showOn = 'showOn';

function stopPainting() {
  painting = false;
}

function stratPainting() {
  painting = true;
}

function onMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(e) {
  painting = true;
}

function changeColor(e) {
  const bgColor = e.target.style.backgroundColor;
  Array.from(jsColor).forEach((color) => {
    color.classList.remove('selectColor');
  });
  e.target.classList.add('selectColor');
  ctx.strokeStyle = bgColor;
  ctx.fillStyle = bgColor;
}

function handleRangeChange(e) {
  const size = e.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = 'Fill🎨';
    ctx.strokeStyle = INITIAL_COLOR;
  } else {
    filling = true;
    mode.innerText = 'Paint🖌';
    ctx.fillStyle = INITIAL_COLOR;
  }
}

function resetCanvas() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, document.body.clientWidth * 0.6, 400);
}

function handeCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, document.body.clientWidth * 0.6, 400);
  }
}

function handleContextMenu(e) {
  e.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = image;
  link.download = 'PaintJS🎨';
  link.click();
}

function handleShowClick() {
  if (showing === true) {
    showing = false;
    showCanvas.innerText = 'CANVAS✨';
    root.classList.remove(showOn);
  } else {
    showing = true;
    root.classList.add(showOn);
    showCanvas.innerText = 'Hide CANVAS🙈';
  }
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', handeCanvasClick);
  canvas.addEventListener('contextmenu', handleContextMenu);
}

Array.from(jsColor).forEach((color) => {
  color.addEventListener('click', changeColor);
});

if (range) {
  range.addEventListener('input', handleRangeChange);
}

if (mode) {
  mode.addEventListener('click', handleModeClick);
}

if (reset) {
  reset.addEventListener('click', resetCanvas);
}

if (saveBtn) {
  saveBtn.addEventListener('click', handleSaveClick);
}

if (showCanvas) {
  showCanvas.addEventListener('click', handleShowClick);
}
