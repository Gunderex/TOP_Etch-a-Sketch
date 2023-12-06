const canvas = document.querySelector("#canvas");

function createRow(rowNum) {
    
    for (let i = 0; i < rowNum; i++) {
        let newRow = document.createElement("div");
        newRow.className = "row";
        canvas.appendChild(newRow);
        
        for (let i = 0; i < rowNum; i++) {
            let newCol = document.createElement("div");
            newCol.className = "col";
            newRow.appendChild(newCol);
            
        }
    }

}

createRow(16);