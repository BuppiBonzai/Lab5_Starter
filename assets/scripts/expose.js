// expose.js

window.addEventListener('DOMContentLoaded', init);



const jsConfetti = new JSConfetti();

function init() {

  

  let p1 = document.getElementById("horn-select");

  
  p1.addEventListener('click', function() {
    let image = document.querySelector("img")
    //console.log("hi")
    let value = p1.value;
    //console.log(value);
    if (value == "air-horn") {
      image.src = "assets/images/air-horn.svg"
    }
    else if (value == "car-horn") {
      image.src = "assets/images/car-horn.svg"
    }
    else if (value == "party-horn") {
      image.src = "assets/images/party-horn.svg"
    }
    
    
  })
  
  let slide = document.getElementById("volume");
  
  slide.addEventListener('input', function() {
    let val = document.getElementById("volume").value;
    let img2 = document.getElementById("volume-controls").querySelector('img');
    if (val == 0) {
      //img2.src = "assets/icons/volume-level-0.svg"
      img2.src = "assets/icons/volume-level-0.svg"
    }
    if (val > 0 && val < 33) {
    //console.log("hi");
      img2.src = "assets/icons/volume-level-1.svg"
    }
    if (val >= 33 && val < 67) {
      //console.log("hi");
      img2.src = "assets/icons/volume-level-2.svg"
    }
    if (val > 67) {
      //console.log("hi");
      img2.src = "assets/icons/volume-level-3.svg"
    }  
  })

  let audio = document.querySelector("button")

  audio.addEventListener('click', function() {
    let value = p1.value;
    let val = document.getElementById("volume").value;
    if (value == "select") {

    }
    else {
      var audio2 = new Audio('assets/audio/' + value + '.mp3');
      audio2.volume = (val/100);
      audio2.play();
      if (value == "party-horn") {
        jsConfetti.addConfetti()
      }
    } 
  })
}

