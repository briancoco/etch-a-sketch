//nested for loop to create all the divs needed 
// use flexbox to make them display in rows and wrap if no space on line
//adds divs to the container 
const container = document.querySelector('#container');
const gridSize = document.querySelector('.grid-size');

for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
        const div = document.createElement('div');
        div.className = 'box';
        div.style.border = "1px solid black"
        div.addEventListener('mouseover', () => div.style.backgroundColor = 'blue');
        container.appendChild(div);
        
    }
}
function removeBoxes() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function changeGridSize() {
    let size = prompt('Enter Grid Size: ');
    removeBoxes();

    for(let i = 0; i < parseInt(size); i++) {
        for(let j = 0; j < parseInt(size); j++) {
            const div = document.createElement('div');
            div.className = 'box';
            div.style.border = "1px solid black"
            div.addEventListener('mouseover', () => div.style.backgroundColor = 'blue');
            container.appendChild(div);
            
        }
    }
    container.style.cssText = `grid-template-columns : repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`;
}



//make nodelist of all boxes
//use .forEach() to loop through list and apply eventlistener
//if "mouseover", then add background-color: black;
//have to put boxes referece here because boxes arent made until the loop is ran.



gridSize.addEventListener('click', changeGridSize);