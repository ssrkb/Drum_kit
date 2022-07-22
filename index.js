
function handleclick(){
  //this.style.color = "blue";
  var buttoninnerhtml = this.innerHTML;
  ButtonAnimate(buttoninnerhtml);
  
  switch(buttoninnerhtml){
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      console.log(buttoninnerhtml);
  }
}

var total =  document.querySelectorAll(".drum").length;
for(var i=0; i < total; i++){
  document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}

document.addEventListener("keypress", function(event) {
  var key = event.key;  
  switch(key){
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      ButtonAnimate(key);
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      ButtonAnimate(key);
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      ButtonAnimate(key);
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      ButtonAnimate(key);
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      ButtonAnimate(key);
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      ButtonAnimate(key);
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      ButtonAnimate(key);
      break;
    default:
      console.log(key);
  }
});

function ButtonAnimate(key){
  var activebutton = document.querySelector("."+key);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}