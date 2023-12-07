const canvas = document.querySelector("#canvas");

/* Function creates grid of divs depending on input number */
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


/* Declares constant for all .col divs then listens for hover to toggle
    colFill */
const squares = document.querySelectorAll(".col");

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseenter", function() {
      squares[i].classList.add("colFill");
    });
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseleave", function() {
      setTimeout(function () {squares[i].classList.remove("colFill")}, 3000);
    });
}

