document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generateButton');
  const factDisplay = document.getElementById('fact');
  
  generateButton.addEventListener('click', function() {
    factDisplay.textContent = 'Load new factt...';
    fetchRandomFact()
      .then(function(fact) {
        factDisplay.textContent = fact;
      })
      .catch(function(error) {
        console.error(error);
        factDisplay.textContent = 'Error while loading fact.';
      });
  });
  
  function fetchRandomFact() {
    const apiUrl = 'https://uselessfacts.jsph.pl/random.json?language=en';
    
    return fetch(apiUrl)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Error while fetching fact.');
        }
        return response.json();
      })
      .then(function(data) {
        return data.text;
      });
  }
});
