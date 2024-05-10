// select element

const formElem = document.getElementById("textToSpeechForm");
const textAreaElem = document.getElementById("inputText");
const selectElem = document.getElementById("select")

function textToVoice(e) {
  // preventDefault
  e.preventDefault();

  // create a SpeechSynthesisUtterance
  let textInput = new SpeechSynthesisUtterance(textAreaElem.value);

  // select a voice audio
  const voices = speechSynthesis.getVoices();
  textInput.voice = voices[0]
  textInput.rate = selectElem.value

  // text to speak
  speechSynthesis.speak(textInput);
  console.log(selectElem.value);
}

formElem.addEventListener("submit", textToVoice);
