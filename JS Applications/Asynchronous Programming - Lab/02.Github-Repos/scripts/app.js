function loadRepos() {
	const usernameInputElement = document.getElementById('username');
	const reposUlElement = document.getElementById('repos');

	const url = `https://api.github.com/users/${usernameInputElement.value}/repos`;

	fetch(url)
	.then(response => response.json())
	.then(data => {
		createLiRepo(data);
	})

	function createLiRepo(data) {
		reposUlElement.innerHTML = '';
		
		data.forEach(repo => {
			const liElement = document.createElement('li');

			const aElement = document.createElement('a');
			aElement.href = repo.html_url;
			aElement.textContent = repo.full_name;

			liElement.appendChild(aElement);
			reposUlElement.appendChild(liElement);
		});
	}
}