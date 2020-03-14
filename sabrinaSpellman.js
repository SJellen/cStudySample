var i = 0;
var txt = 'Sabrina Spellman is a fictional character created by George Gladir and Dan DeCarlo. \nHer mother is human and her father is a Worlock. \nShe lives with her aunts Hilda and Zelda in the town of Greendale.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("lead").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} 