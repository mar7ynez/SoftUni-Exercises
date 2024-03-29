function solve() {

  let input = document.querySelector('#input');
  let divElement = document.getElementById('output');

  let pattern = /\S[\w,\/\s\(\)-]+./g;
  let splitedSentences = input.value.match(pattern);
  
  divElement.innerHTML = '';

  if (splitedSentences.length <= 3) {
    divElement.innerHTML += `<p>${input.value}</p>`

  } else {

    for (let i = 0; i < splitedSentences.length; i += 3) {
      let paragraph = splitedSentences.slice(i, 3 + i);
      divElement.innerHTML += `<p>${paragraph}</p>`;
    }
  }
}