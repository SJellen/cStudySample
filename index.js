
// typewriter

var i = 0;
var txt = 'Following the travels of characters through different forms of media.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("lead").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} 

// random namer

var characters = ['Ace Ventura', 'Allan Quatermain', 'Ash', 'Austin Powers', 'Axel Foley', 'Bilbo Baggins',  'Carrie Bradshaw', 'Chucky', 'Dale Cooper',
 'Dexter Morgan', 'Dirty Harry', "Dominic Toretto", "Ellen Ripley", "Eric Cartman", "Ethan Hunt", "The Grinch", "Hannibal Lecter", "Harry Potter", "Indiana Jones", "Jack Bauer", "Jack Reacher", "Jack Ryan", "Jack Sparrow", "James Bond", "Jason Bourne", "Jason Voorhees",  "Jigsaw", "John Luther", "John McClaine", "Katniss Everdeen", "Lara Croft", "Mal Reynolds", "The Man With No Name", "Marty McFly", "Master Chief", "Michael Corleone", "Mulder & Scully", "Nathan Drake", "Neo", "Norman Bates", "Parker", "Philip Marlowe", "Rambo", "Rocky Balboa", "Sabrina Spellman", "Sherlock Holmes", "Snake Plissken", "Tara Chace", "Terminator", "Willy Wonka"];

 

setInterval(e => {
  var rando = Math.floor(Math.random()*characters.length);
  document.getElementById("sequence").innerHTML = characters[rando];

}, 1500)