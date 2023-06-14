document.addEventListener('DOMContentLoaded', function() {
  const jokeOneButton = document.getElementById('jokeOneButton');
  const categorySelect = document.getElementById('categorySelect');
  const jokeDisplay = document.getElementById('jokeOne');

  jokeOneButton.addEventListener('click', function() {
    jokeDisplay.textContent = 'Loading new joke...';
    const selectedCategory = categorySelect.value;
    fetchRandomJoke('https://jokeapi.dev/api/jokes/' + selectedCategory)
      .then(function(joke) {
        jokeDisplay.textContent = joke;
      })
      .catch(function(error) {
        console.error(error);
        jokeDisplay.textContent = 'Error while loading joke.';
      });
  });

  function fetchRandomJoke(apiUrl) {
    return fetch(apiUrl)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Error while fetching joke.');
        }
        return response.json();
      })
      .then(function(data) {
        if (data.type === 'single') {
          return data.joke;
        } else if (data.type === 'twopart') {
          return data.setup + ' ' + data.delivery;
        } else {
          throw new Error('Invalid joke format.');
        }
      });
  }
});
  