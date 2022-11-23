const hexaBlocks = document.querySelector(".hexa-blocks");
const btn = document.querySelector(".btn");


const createHexa = () => {
  let str = '1234567890abcdef';
  let colorHexa = '';
  for (let i = 0; i < 6; i++) {
    let indx = Math.floor(Math.random() * str.length)
    colorHexa += str[indx]
  }
  let hexa = '#' + colorHexa;
  return hexa;
};


const createBlocksHexa = (j) => {
  hexaBlocks.innerHTML = '';
  for (let i = 0; i < j; i++) {
    let block = document.createElement('div');
    block.classList.add('hexa');
    let color = createHexa();
    block.textContent = color;
    block.style.backgroundColor = color;
    hexaBlocks.appendChild(block);
  }
  changeColorBtn();
};


const changeColorBtn = () => {
  let color = createHexa();
  btn.style.backgroundColor = color;
};


const eventChangeBtn = (e) => {
  createCircle(e);
  createBlocksHexa(5);
};


const createCircle = (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;
  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;
  const circle = document.createElement('div');
  circle.classList.add("circle");
  circle.style.top = yInside + 'px';
  circle.style.left = xInside + 'px';
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 500);
};


createBlocksHexa(5);
btn.addEventListener('click', eventChangeBtn);