function solve() {

  let answerElements = document.querySelectorAll('.answer-text');
  let resultElement = document.querySelector('#results > .results-inner > h1');

  answerElements.forEach(element => element.addEventListener('click', onAnsweredQuestion));

  let rightAnswers = 0;

  function onAnsweredQuestion(e) {
    let questionElement = e.target.parentNode.parentNode.parentNode.querySelector('li>div>h2');
    let sectionElements = document.querySelectorAll('section');

    if (questionElement.textContent.includes('#1')) {
      sectionElements[0].style.display = 'none';
      sectionElements[1].style.display = 'block';
      e.target.textContent === 'onclick' ? rightAnswers++ : rightAnswers;

    } else if (questionElement.textContent.includes('#2')) {
      e.target.textContent === 'JSON.stringify()' ? rightAnswers++ : rightAnswers;
      sectionElements[1].style.display = 'none';
      sectionElements[2].style.display = 'block';

    } else {
      sectionElements[2].style.display = 'none';
      e.target.textContent === 'A programming API for HTML and XML documents' ? rightAnswers++ : rightAnswers;
      resultElement.parentNode.parentNode.style.display = 'block';
      rightAnswers === 3 ? resultElement.textContent = 'You are recognized as top JavaScript fan!' : resultElement.textContent = `You have ${rightAnswers} right answers`;
    }
  }
}
