// Deel 1
function countBs(string){
    let bCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            bCount = bCount + 1;
        }
    }
  return bCount;
}
console.log(countBs("BBC"));


// Deel 2
function countChars(string, char){
    let charCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            charCount = charCount + 1;
        }
    }
  return charCount;
}
console.log(countChars("kakkerlak", "k"));
