document.body.onload = drawPad;
const buttons = document.querySelectorAll("button");
var pad = document.getElementById("pad");
var rows = document.createElement("div");
var blocks = document.createElement("div");
rows.classList.add("row");
blocks.classList.add("cell");
blocks.addEventListener('mouseover', function(event) {
    console.log('Element', evenet.target, 'is hovered');
});


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
    id.classList.add('b-white');
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        switch(btn.id) {
            case "clear":
                clearPad();
                break;
        }
    });
});


//gets all elements with class b-white and remove that class
function clearPad() {
    const colorBlock = document.querySelectorAll(".b-white");
    for(i=0; i < colorBlock.length; i++) {
        colorBlock[i].classList.remove('b-white');
    }
}