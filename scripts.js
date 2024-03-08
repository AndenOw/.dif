// scripts.js

// Function called when ".dif" button is clicked
function runDotDif() {
    var textarea1Value = document.getElementById("textarea1").value;
    var textarea2Value = document.getElementById("textarea2").value;

    // Compare the text from both text areas
    if (textarea1Value === textarea2Value) {
        alert("The text in both text areas is the same.");
    } else {
        alert("The text in both text areas is different.");

        // Create and log line-holding arrays from the textarea values
        let ver1array = textarea1Value.split("\n");
        let ver2array = textarea2Value.split("\n");
        console.log("ver1array: \n" + JSON.stringify(ver1array) + "\n\nver2array: \n" + JSON.stringify(ver2array));

        // Make placeholders for differing lines
        let ver1diffLines = [];
        let ver2diffLines = [];
        
        // Make placeholder for current iterated ver2array index
        let ver2iteration = 0;

        // Iterate through ver1array
        for(let i = 0; i < ver1array.length; i++) {
            // If ver1array index is equal to ver2array index, go to next
            if(ver1array[i] == ver2array[ver2iteration]) {
                if(ver2array.length > ver2iteration + 1) {
                    ver2iteration++;
                }
            } else {
                // Update differing line placeholders and ver2iteration
                ver1diffLines.push(i);
                ver2diffLines.push(ver2iteration);
                if(ver2array.length > ver2iteration + 1) {
                    ver2iteration++;

                    // Find the next equal line in ver2array
                    while(ver1array[i] != ver2array[ver2iteration]) {
                        ver2diffLines.push(ver2iteration);
                        if(ver2array.length > ver2iteration + 1) {
                            ver2iteration++;
                        } else {
                            break;
                        }
                    }
                }
            }
        }

        console.log("ver1diffLines: " + JSON.stringify(ver1diffLines) + "\n\nver2diffLines: " + JSON.stringify(ver2diffLines));
    }
}
