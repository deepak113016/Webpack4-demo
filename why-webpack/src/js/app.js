var showFact = false;

factButton.addEventListener('click', showFactData);
showFactParagraph()

function showFactData() {
    showFact = !showFact;

    showFactParagraph();
    updateFactButton();

}
function updateFactButton() {
    if (showFact) {
        factButton.textContent = "Hide the Fact"
    }
    else {
        factButton.textContent = "Show the Fact"
    }
}

function showFactParagraph() {
    if (showFact) {
        factParagraph.style.display = 'block';
    }
    else {
        factParagraph.style.display = 'none';
    }
}