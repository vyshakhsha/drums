var drums = document.querySelectorAll(".drum").length
for (var i = 0; i < drums; ++i) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML
    makesound(buttonInnerHTML)
    buttonANIMATION(buttonInnerHTML)
  });
}

function makesound(character) {
  switch (character) {
    case 'w':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
  }
}



document.addEventListener("keydown", function() {
  makesound(event.key)
  buttonANIMATION(event.key)
});

function buttonANIMATION(currentkey){
  var activekey=document.querySelector("."+currentkey);
  console.log(activekey)
  activekey.classList.add("pressed")

  setTimeout(function(){
  activekey.classList.remove("pressed")
}, 100);
}
