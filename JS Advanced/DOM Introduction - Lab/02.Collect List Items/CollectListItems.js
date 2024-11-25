function extractText() {

    let elementLi = document.getElementById('items');
    let textAreaElement = document.getElementById('result');
    
    textAreaElement.textContent = elementLi.textContent;
}