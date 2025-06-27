const textInput = document.getElementById('text-input');
const voiceSelect = document.getElementById('voice-select');
const speakBtn = document.getElementById('speak');
const synth = window.speechSynthesis;

let voices = [];

function populateVoices() {
  voices = synth.getVoices();
  voiceSelect.innerHTML = voices
    .map(v => `<option value="${v.name}">${v.name} (${v.lang})</option>`)
    .join('');
}

synth.addEventListener('voiceschanged', populateVoices);

populateVoices();

speakBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (!text) return alert("Tape du texte à convertir en voix !");
  const utter = new SpeechSynthesisUtterance(text);
  const selectedVoiceName = voiceSelect.value;
  utter.voice = voices.find(v => v.name === selectedVoiceName);
  synth.speak(utter);
});
