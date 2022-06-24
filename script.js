//nested for loop to create all the divs needed 
// use flexbox to make them display in rows and wrap if no space on line
const container = document.querySelector('#container');
for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.className = 'box';
        div.style.border = "2px solid black"
        container.appendChild(div);
        
    }
}