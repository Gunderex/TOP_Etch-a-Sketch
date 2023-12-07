const canvas = document.querySelector("#canvas");

function createRow(rowNum) {
    
    for (let i = 0; i < rowNum; i++) {
        let newRow = document.createElement("div");
        newRow.className = "row";
        newRow.id = "row" + i;
        canvas.appendChild(newRow);
        let rowId = i;
        for (let i = 0; i < rowNum; i++) {
            let newCol = document.createElement("div");
            newCol.className = "col";
            newCol.id = "col" + i + "R" + rowId;
            newRow.appendChild(newCol);
            
        }
    }

}

createRow(16);

function hoverListen(event) {
    const divToggle = document.querySelector(`#` + event.target.id);
    divToggle.classList.toggle("colFill");
}

const squares = document.querySelectorAll(".col");

function hoverOn() {
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseenter", function() {
      squares[i].classList.toggle("colFill");
    });
}
}

function hoverOff() {
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseleave", function() {
      squares[i].classList.toggle("colFill");
    });
}
}

function delayHover() {
    timeoutId = setTimeout (hoverOff, 3);
}
