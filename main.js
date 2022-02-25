const container = document.querySelector('.container');
let gridSize = 0;
let itemSize = 0;

generateGrid();

function generateGrid(gridSize=16){
    //Defining the size of the pixels in the grid
    itemSize = parseInt(window.getComputedStyle(container).width) / gridSize;
    container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, ${itemSize}px);`);

    //Generating the grid
    for(let i = 0; i < Math.pow(gridSize, 2); i++){
        const pixel = document.createElement('div');
        pixel.style.height = `${itemSize}px`;
        pixel.className = "pixel";
        container.appendChild(pixel);
    }
    return document.querySelectorAll('.pixel');
}

let grid = document.querySelectorAll('.pixel');
//Changing the color of the divs
grid.forEach(pixel => pixel.addEventListener('mouseover', () => {
    pixel.setAttribute('style', `background-color: #${Math.floor(Math.random()*16777215).toString(16)}`);
    pixel.classList.add('colored');
}));

//Clear the grid and defining a new gridSize 
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    gridSize = prompt('New grid size');
    if(gridSize < 100){
        grid.forEach(pixel => container.removeChild(pixel));
        grid = generateGrid(gridSize);
        grid.forEach(pixel => pixel.addEventListener('mouseover', () => {
            pixel.setAttribute('style', `background-color: #${Math.floor(Math.random()*16777215).toString(16)}`);
            pixel.classList.add('colored');
        }));
    } else {
        alert('Grid to large');
        resetButton.click()
    }
});

