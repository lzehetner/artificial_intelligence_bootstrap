document.addEventListener('DOMContentLoaded', function() {
  const jokeOneButton = document.getElementById('jokeOneButton');
  const categorySelect = document.getElementById('categorySelect');
  const jokeDisplay = document.getElementById('jokeOne');

  jokeOneButton.addEventListener('click', function() {
    jokeDisplay.textContent = 'Loading new joke...';
    const selectedCategory = categorySelect.value;
    const apiUrl = https://jokeapi.dev/api/jokes/${selectedCategory}?type=single;

    fetch(apiUrl)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Error while fetching joke.');
        }
        return response.json();
      })
      .then(function(data) {
        jokeDisplay.textContent = data.joke;
      })
      .catch(function(error) {
        console.error(error);
        jokeDisplay.textContent = 'Error while loading joke.';
      });
  });
});