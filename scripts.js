// scripts.js

function runDotDif() {
    var textarea1Value = document.getElementById("textarea1").value;
    var textarea2Value = document.getElementById("textarea2").value;

    // Compare the text from both text areas
    if (textarea1Value === textarea2Value) {
        alert("The text in both text areas is the same.");
    } else {
        alert("The text in both text areas is different.");
    }
}