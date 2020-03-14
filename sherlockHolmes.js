var i = 0;
var txt = 'Sherlock Holmes is a fictional detective created by Arthur Conan Doyle. \nHe is a master of deductive reasoning and has profound knowledge of Chemistry. ';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("lead").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}