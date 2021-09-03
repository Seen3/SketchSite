const board = document.getElementById('board');
const drugs = document.getElementById('drugged');
board.style.display = "flex";
board.style.flexWrap = "wrap";
board.style.width = "600px";
board.style.height = "600px";

const col = document.getElementById('col');
//console.log("Test");
let currentColor = "black";
function clr() {
    let boxes = document.querySelectorAll(`.gridbox`);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "white";
    }
}


function removeBoxes()
{
    while(board.firstChild)
    {
        board.removeChild(board.firstChild)
    }
    makeBoxes();
}
function makeBoxes() {
    let boxNum = document.getElementById('boxnum').value;
    for (let i = 0; i < boxNum; i++) {
        for (let j = 0; j < boxNum; j++) {
            let box = document.createElement('div');
            box.classList.add("gridbox");
            box.style.width = `${(600/boxNum)}px`;
            box.style.height = `${(600/boxNum)}px`;
            box.style.backgroundColor="white";
            //box.style.border = "1px solid black";
            box.style.flex = "1 0 auto";
            box.onmouseover = () => {
                if (drugs.checked) {
                    col.value = `#${getCol()}`;
                }
                //console.log(document.getElementById('boxnum').value);
                box.style.backgroundColor = col.value;
                board.style.border=`2em groove ${col.value}`;
            }
            board.appendChild(box);
        }
    }
}

function getCol() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    r = parseInt(r, 10).toString(16);
    g = parseInt(g, 10).toString(16);
    b = parseInt(b, 10).toString(16);
    r = r.padStart(2, "0");
    g = g.padStart(2, "0");
    b = b.padStart(2, "0");
    return (r + g + b);
}
makeBoxes();
board.style.border=`2em groove ${col.value}`;
