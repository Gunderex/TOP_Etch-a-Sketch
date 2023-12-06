const canvas = document.querySelector("#canvas");

function createRow(rowNum) {
    
    for (let i = 0; i < rowNum; i++) {
        let newRow = document.createElement("div");
        newRow.className = "row";
        newRow.id = "row" + i;
        canvas.appendChild(newRow);
        
        for (let i = 0; i < rowNum; i++) {
            let newCol = document.createElement("div");
            newCol.className = "col";
            newCol.id = "col" + i + ":" + newRow.id;
            newRow.appendChild(newCol);
            
        }
    }

}

createRow(16);

function hoverListen(event) {
    const divToggle = document.querySelector(`"#` + event.target.id + `"`);
    divToggle.classList.toggle("colFill");
}

const squares = document.querySelector(".col");
squares.addEventListener('mouseenter', hoverListen);
squares.addEventListener('mouseleave', hoverListen);