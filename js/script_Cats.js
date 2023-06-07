document.addEventListener('DOMContentLoaded', function() {
    const catButton= document.getElementById('catButton');
    const factDisplay = document.getElementById('fact');
    
    catButton.addEventListener('click', function() {
      factDisplay.textContent = 'Loading new fact...';
      fetchRandomFact('https://cat-fact.herokuapp.com/facts/random')
        .then(function(fact) {
          factDisplay.textContent = fact.text;
        })
        .catch(function(error) {
          console.error(error);
          factDisplay.textContent = 'Error while loading fact.';
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
  