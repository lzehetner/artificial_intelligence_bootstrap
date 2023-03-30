const factInput = document.querySelector('#factInput');
const factOutput = document.querySelector('#factOutput');
const generateFact = async () => {
    const response = await fetch(`https://api.somesite.com/facts/${factInput.value}`);
    const fact = await response.json();
    factOutput.innerText = fact.text;
}
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    generateFact();
});