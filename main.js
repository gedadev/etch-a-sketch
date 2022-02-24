const container = document.querySelector('.container');
let gridSize = 16;
let itemSize = 0;

itemSize = parseInt(window.getComputedStyle(container).width) / gridSize;

container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, ${itemSize}px);`);

for(let i = 0; i < Math.pow(gridSize, 2); i++){
    const pixel = document.createElement('div');
    pixel.style.height = `${itemSize}px`;
    pixel.className = "pixel";
    container.appendChild(pixel);
}

const grid = document.querySelectorAll('.pixel');

grid.forEach(pixel => pixel.addEventListener('mouseover', (e) => {
    //console.log(e);
    pixel.className = "colored";
}));