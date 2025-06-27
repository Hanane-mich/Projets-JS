const form = document.getElementById("myForm");
const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // bloque l'envoi réel
  popup.style.display = "flex"; // affiche la popup
});

okBtn.addEventListener("click", function() {
  popup.style.display = "none"; // ferme la popup
  form.reset(); // vide le formulaire si besoin
});
