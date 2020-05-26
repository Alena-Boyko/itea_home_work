var elementUL = document.getElementById('list');

var selectedNode = null;

function resetColor() {
    Array.from(document.getElementById('list').children).forEach((ol) => {
        ol.style.color = 'green';
    });    
}

function firstElement() {
    resetColor();
    selectedNode = elementUL.firstElementChild;
    selectedNode.style = 'color: orange';
}

function lastElement() {
    resetColor();
    selectedNode = elementUL.lastElementChild;
    selectedNode.style = 'color: orange';
}

function nextElement() {
    resetColor();
    if (!selectedNode) {
        selectedNode = elementUL.firstElementChild;
    } else {
        if (selectedNode.nextElementSibling) {
            selectedNode = selectedNode.nextElementSibling;
        } else {
            selectedNode = selectedNode.parentElement.firstElementChild;
        }
    } 
    selectedNode.style = 'color: orange';
}

function prevElement() {
    resetColor();
    if (!selectedNode) {    
        selectedNode = elementUL.lastElementChild;
    } else {
        if (selectedNode.previousElementSibling) {
            selectedNode = selectedNode.previousElementSibling;
        } else {
            selectedNode = selectedNode.parentElement.lastElementChild;
        }
        
    }
    selectedNode.style = 'color: orange';
}

function addElement() {
    resetColor();
    var elementOL = document.createElement("ol");
    elementOL.innerText = 'new text';
    selectedNode = elementUL.appendChild(elementOL);
    selectedNode.style = 'color: orange';
}

function deleteElement() {
    selectedNode = elementUL.removeChild(elementUL.lastElementChild);
}

function addToStart() {
    resetColor();
    var elementOL = document.createElement("ol");
    elementOL.innerText = 'new text for first elem';
    selectedNode = elementUL.insertBefore(elementOL,elementUL.firstChild); 
    selectedNode.style = 'color: orange';
}






