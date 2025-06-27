const input = document.getElementById('qr-input');
const button = document.getElementById('generate-btn');
const output = document.getElementById('qr-output');

let currentQRCode;

button.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) {
    alert('Veuillez saisir un texte ou URL');
    return;
  }
  // Réinitialiser si déjà généré
  output.innerHTML = '';
  currentQRCode = new QRCode(output, {
    text: value,
    width: 200,
    height: 200
  });
});
