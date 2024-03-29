function solve() {

  let input = document.querySelector('#input');
  let divElement = document.getElementById('output');

  let pattern = /\S[\w,\/\s\(\)-]+./g;
  let splitedSentences = input.value.match(pattern);

  divElement.innerHTML = '';

  for (let i = 0; i < splitedSentences.length; i += 3) {
    let paragraph = splitedSentences.slice(i, 3 + i);
    divElement.innerHTML += `<p>${paragraph}</p>`;
  }
}