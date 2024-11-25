function create(words) {

   for (let word of words) {
      let contentElement = document.getElementById('content');
      let divElement = document.createElement('div');
      let paragraphElement = document.createElement('p');

      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';
      divElement.appendChild(paragraphElement);
      contentElement.appendChild(divElement);

      divElement.addEventListener('click', (e) => {
         e.target.childNodes[0].style.display = 'block'
      });
   }
}