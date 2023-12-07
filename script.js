const canvas = document.querySelector("#canvas");

/* Function to remove any current canvas divs */
function removeCanvas() {
    while (canvas.hasChildNodes())
            canvas.firstChild.remove()
}

/* Function clears current canvas then creates grid of divs depending on input number */
function createRow(rowNum) {
    removeCanvas();
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

/* Creates initial 16x16 canvas */
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


function clickListener(event) {
    if (event.target.tagName !== "BUTTON") {
       return;
    }
    let targetId = event.target.id;
    let newRowNum = targetId.replace("b","");
    createRow(newRowNum);
 }

const btn16 = document.querySelector("#b16").addEventListener("click", clickListener);
const btn50 = document.querySelector("#b50").addEventListener("click", clickListener);
const btn100 = document.querySelector("#b100").addEventListener("click", clickListener);