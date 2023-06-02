document.addEventListener('DOMContentLoaded', function() {
    const chuckButton = document.getElementById('chuckButton');
    const factDisplay = document.getElementById('joke');
  
    chuckButton.addEventListener('click', function() {
      factDisplay.textContent = 'Loading Chuck Norris joke...';
      fetchRandomFact('https://api.chucknorris.io/jokes/random')
        .then(function(fact) {
          factDisplay.textContent = fact;
        })
        .catch(function(error) {
          console.error(error);
          factDisplay.textContent = 'Error while loading Chuck Norris joke.';
        });
    });
  
    function fetchRandomFact(apiUrl) {
      return fetch(apiUrl)
        .then(function(response) {
          if (!response.ok) {
            throw new Error('Error while fetching fact.');
          }
          return response.json();
        })
        .then(function(data) {
          return data.value;
        });
    }
  });
  