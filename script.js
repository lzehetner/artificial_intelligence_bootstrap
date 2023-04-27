const facts = {
"Tiere": [
    "Es gibt mehr als 1 Million bekannter Insektenarten auf der Welt.",
    "Krokodile haben einen starken Biss, der bis zu 3700 psi erreichen kann.",
    "Pandas sind keine Bären, sondern gehören zur Familie der Bärenartigen.",
],
"Wissenschaft": [
    "Der längste Tag des Jahres, der Sommer-Sonnenwende, ist auch der Tag, an dem die Erdachse am stärksten geneigt ist.",
    "Die Milchstraße hat einen Durchmesser von etwa 100.000 Lichtjahren.",
    "Das menschliche Gehirn besteht aus etwa 100 Milliarden Neuronen.",
],
"Geschichte": [
    "Die Antike wurde von den Griechen und Römern geprägt und dauerte von etwa 700 v. Chr. bis 500 n. Chr.",
    "Die französische Revolution fand von 1789 bis 1799 statt und führte zur Abschaffung der Monarchie in Frankreich.",
    "Im Zweiten Weltkrieg kämpften die Alliierten gegen die Achsenmächte.",
],
};

// Erstellen Sie eine Liste von Kategorien.
const categories = Object.keys(facts);

// Funktion zum Generieren eines zufälligen Fakts.
function generateFact() {
const category = document.getElementById("category").value;
const factList = facts[category];
const randomFact = factList[Math.floor(Math.random() * factList.length)];
document.getElementById("fact").innerHTML = randomFact;
}

// Funktion zum Ändern der Kategorie.
function changeCategory() {
const categoryElement = document.getElementById("category");
const currentCategory = categoryElement.value;
let newCategory;
do {
    newCategory = categories[Math.floor(Math.random() * categories.length)];
} while (newCategory === currentCategory);
categoryElement.value = newCategory;
generateFact();
}

// Initialisieren Sie die Kategorieauswahl.
const categorySelect = document.createElement("select");
categorySelect.id = "category";
for (const category of categories) {
const option = document.createElement("option");
option.value = category;
option.text = category;
categorySelect.appendChild(option);
}
document.body.insertBefore(categorySelect, document.getElementById("fact"));