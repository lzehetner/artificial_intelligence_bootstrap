document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generateButton');
  const factDisplay = document.getElementById('fact');
  
  generateButton.addEventListener('click', function() {
    fetchNASAFact()
      .then(function(fact) {
        factDisplay.textContent = fact;
      })
      .catch(function(error) {
        console.error(error);
        factDisplay.textContent = 'Fehler beim Laden des Fakts.';
      });
  });
  
  function fetchNASAFact() {
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=sFBaYVdNpxvCpXPACNwxMPGP6MoIVCnSSaqP3QIA';
    
    return fetch(apiUrl)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Fehler bei der API-Anfrage: ' + response.status);
        }
      })
      .then(function(data) {
        return data.explanation;
      });
  }
});
