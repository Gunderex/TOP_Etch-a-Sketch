const canvas = document.querySelector("#canvas");

function createRow() {
    
        let newRow = document.createElement("div");
        newRow.className = "row";
        canvas.appendChild(newRow);
        
    
}
createRow();