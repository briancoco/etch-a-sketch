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
        container.appendChild(div);
        
    }
}

//make nodelist of all boxes
//use .forEach() to loop through list and apply eventlistener
//if "mouseover", then add background-color: black;
//have to put boxes referece here because boxes arent made until the loop is ran.
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => box.style.backgroundColor = 'blue');
});

function removeBoxes() {
    boxes.forEach((box) => container.removeChild(box));
}

gridSize.addEventListener('click', removeBoxes);