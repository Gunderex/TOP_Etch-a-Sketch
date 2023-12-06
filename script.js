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

// const tile = document.querySelectorAll(".col");
// tile.addEventListener('mouseenter', () => {
//     tile.classList.add("colFill");
// })
// tile.addEventListener('mouseleave', () => {
//     tile.classList.remove("colFill");
// })