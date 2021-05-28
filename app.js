const textDisplay = document.getElementById("text");
const phrases = [
  "Hello, my name is Trey.",
  "I love to code",
  "I love to learn",
];
let i = 0;
let j = 0;
let currentPhrase = [];

function loop() {
  textDisplay.innerHTML = currentPhrase.join("");
  if (i < phrases.length) {
    if (j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (j == phrases[i].length) {
      i++;
    }
  }
  setTimeout(loop, 500);
}

loop();
