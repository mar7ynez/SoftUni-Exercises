function focused() {
    
    let inputElements = document.querySelectorAll('div>input');
    
    for (let el of inputElements) {
        el.addEventListener('focus', () => {
            el.parentNode.className = 'focused';
        });

        el.addEventListener('blur', () => {
            el.parentNode.className = '';;
        });
    }
}