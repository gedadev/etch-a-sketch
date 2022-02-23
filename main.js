const container = document.querySelector('.container');
let gridSize = 16;
let itemSize = 0;

itemSize = parseInt(window.getComputedStyle(container).width) / gridSize;
console.log(itemSize);
console.log(gridSize);

container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, ${itemSize}px);`);

for(let i = 0; i < 256; i++){
    const pixel = document.createElement('div');
    pixel.style.height = `${itemSize}px`;
    pixel.className = "pixel";
    container.appendChild(pixel);
}
