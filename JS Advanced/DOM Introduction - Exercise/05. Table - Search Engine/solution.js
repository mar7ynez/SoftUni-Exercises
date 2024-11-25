function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rowElements = document.querySelectorAll('tbody tr');
   let input = document.getElementById('searchField');

   function onClick() {
      for (let i = 0; i < rowElements.length; i++) {
         input.value && rowElements[i].textContent.includes(input.value) ? rowElements[i].className = 'select' : rowElements[i].className = '';
      }
   }
}