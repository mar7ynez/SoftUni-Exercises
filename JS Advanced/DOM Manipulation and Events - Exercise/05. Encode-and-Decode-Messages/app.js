function encodeAndDecodeMessages() {
    let buttonsElement = document.querySelectorAll('button');
    
    let onClick = (e) => {
        let curParent = e.target.parentNode;
        let inputTextElement = curParent.querySelector('textarea');
        let outputTextElement = document.querySelector('div:nth-of-type(2n) > textarea');
        let paragraphElement = curParent.querySelector('p');
        
        
        if (paragraphElement.textContent === 'Message') {
            let encodedMsg = [];
            for (let char of inputTextElement.value) {
                encodedMsg.push(char.charCodeAt() + 1);
            }
            outputTextElement.value = String.fromCharCode(...encodedMsg);
            inputTextElement.value = '';
            
        } else {
            let decodedMsg = [];
            for (let char of outputTextElement.value) {
                decodedMsg.push(String.fromCharCode(char.charCodeAt() - 1));
            }
            outputTextElement.value = decodedMsg.join('');
        }
    }

    for (let button of buttonsElement) {
        button.addEventListener('click', onClick);
    }
}