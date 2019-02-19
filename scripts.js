document.body.onload = drawPad;
const cls = ['b-white', 'b-color'];

let mode = 'white';
let counter = 0;

let pad = document.getElementById("pad");
let blocks = document.createElement("div");
blocks.classList.add("cell");


function drawPad() {
    for(i=0; i < 16; i++) {
        for(j=0; j < 16; j++) {           
            pad.appendChild(blocks.cloneNode(true));
        }
        //pad.appendChild(rows.cloneNode(true));        
    }
    console.log(pad);
    var allBlocks = document.getElementsByClassName('cell');
    for (var i = 0; i < allBlocks.length; i++) {
        allBlocks[i].addEventListener('mouseover', function (event) {
          changeColor(event.target);
        });
    }
}


function changeColor(id) {
    switch (mode) {
        case 'color':
            id.classList.add('b-color');
            //random hex code snippet found on https://www.paulirish.com/2009/random-hex-color-code-snippets/
            //in comments found an improvement to snippet and went with that - thank you Mathias Bynens
            id.style.backgroundColor = '#'+(Math.random()*(1<<24)|0).toString(16);
            break;
        
        default:
            id.classList.add('b-white');           
            id.style.backgroundColor = shader(id);            
            break;
    }
    
}

//gets all elements with class b-white and remove that class
function clearPad() {    
    const colorBlock = document.querySelectorAll('.cell');
    for(i=0; i < colorBlock.length; i++) {
        colorBlock[i].removeAttribute('style');
        colorBlock[i].classList.remove(...cls);
    }
}

//TODO
function resizePad() {

}

//sets mode on btn click
function changeMode(newMode) {
    mode = newMode;
}

//shades the element lighter using shades[] until fully white
function shader (curElm) {
    const shades = ['rgb(32, 32, 32)',
                'rgb(64, 64, 64)',
                'rgb(96, 96, 96)',
                'rgb(120, 120, 120)',
                'rgb(152, 152, 152)', 
                'rgb(176, 176, 176)',
                'rgb(200, 200, 200)',
                'rgb(220, 220, 220)',
                'rgb(245, 245, 245)',
                'rgb(255, 255, 255)'];
                
    color = curElm.style.backgroundColor;
    if(color === "") { return shades[0]; }
    else { 
        ind = shades.indexOf(color);
        if(ind < shades.length) {
            return shades[shades.indexOf(color) + 1]; 
        }
        return;
    }    
}