const board=document.getElementById('board');
board.style.display="flex";
board.style.flexWrap="wrap";
board.style.width="800px";
board.style.height="800px";
board.style.border="2em double green"
console.log("Test");
function clr()
{
    let boxes=document.querySelectorAll(`.gridbox`);
    for (let i=0;i<boxes.length;i++)
    {
        boxes[i].style.backgroundColor="white";
    }
}
for (let i=0;i<16;i++)
{
    for (let j=0;j<16;j++)
    {
        let box=document.createElement('div');
        box.classList.add("gridbox");
        box.style.width='50px';
        box.style.height='50px';
        //box.style.border="1px solid black";
        box.style.flex="1 0 auto";
        box.onmouseover=()=>{
            box.style.backgroundColor='black';
        }
        board.appendChild(box);
        //console.log("Board added");
    }
}
