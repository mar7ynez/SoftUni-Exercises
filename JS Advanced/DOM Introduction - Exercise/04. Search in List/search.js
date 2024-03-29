function search() {

   let townsElements = document.getElementsByTagName('li');
   let inputTextElement = document.getElementById('searchText');
   let resultElement = document.getElementById('result');

   let towns = Array.from(townsElements);
   let matchesCounter = 0;

   for (let i = 0; i < towns.length; i++) {
      if (towns[i].textContent.includes(inputTextElement.value) && inputTextElement.value) {
         matchesCounter++;
         towns[i].style.textDecoration = 'underline';
         towns[i].style.fontWeight = 'bold';

      } else {
         towns[i].style.textDecoration = 'none';
         towns[i].style.fontWeight = 'normal';

      }
   }
   resultElement.textContent = `${matchesCounter} matches found`
}
