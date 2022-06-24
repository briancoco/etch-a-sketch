//nested for loop to create all the divs needed 
// use flexbox to make them display in rows and wrap if no space on line
//adds divs to the container 
const container = document.querySelector('#container');
for(let i = 0; i < 20; i++) {
    const subcontainer = document.createElement('div');
    subcontainer.className = 'sub';
    for(let j = 0; j < 20; j++) {
        const div = document.createElement('div');
        div.className = 'box';
        div.style.border = "2px solid black"
        subcontainer.appendChild(div);
        
    }
    container.appendChild(subcontainer);
}

//make nodelist of all boxes
//use .forEach() to loop through list and apply eventlistener
//if "mouseover", then add background-color: black;
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => box.style.backgroundColor = 'blue');
});