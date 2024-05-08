// explore.js
/*
I could not for the life of me get the face change to work well.
synth.speaking ALWAYS returns true or false depending on
your browser and never changes regardless if the speach is active 
so i cant use it to change the image,
and I couldnt figure out any other way to do it
*/
window.addEventListener('DOMContentLoaded', init);

function init() {
  //const voices = speechSynthesis.getVoices();
  let vl = 0;
  let selectTag = document.getElementById("voice-select");
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
      vl+=1;
    }
  }
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let p1 = document.querySelector("button")

  let p2 = document.getElementById("voice-select");
  const synth = window.speechSynthesis;
  p1.addEventListener("click", function() {
    const voices = speechSynthesis.getVoices();
    let text = document.getElementById("text-to-speak").value;
    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedOption = p2.selectedOptions[0].getAttribute("data-name");
    //console.log(selectedOption);
    //console.log(voices.length);
    for (let i = 0; i < vl; i++) {
      //console.log(voices[i]);
      //console.log(voices[i].name);
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
  })

}