document.addEventListener('DOMContentLoaded', function() {
  const jokeOneButton = document.getElementById('jokeOneButton');
  const categorySelect = document.getElementById('categorySelect');
  const jokeDisplay = document.getElementById('jokeOne');

  jokeOneButton.addEventListener('click', function() {
    jokeDisplay.textContent = 'Loading new joke...';
    const selectedCategory = categorySelect.value;
    const apiUrl = `https://v2.jokeapi.dev/joke/${selectedCategory}`;

    fetch(apiUrl)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Error while fetching joke.');
        }
        return response.json();
      })
      .then(function(data) {
        if (data.error) {
          jokeDisplay.textContent = 'No joke found.';
        } else {
          if (data.type === 'twopart') {
            jokeDisplay.textContent = `${data.setup} ${data.delivery}`;
          } else {
            jokeDisplay.textContent = data.joke;
          }
        }
      })
      .catch(function(error) {
        console.error(error);
        jokeDisplay.textContent = 'Error while loading joke.';
      });
  });
});
