document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Bloque l'envoi réel

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !email || !message) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  if (!validateEmail(email)) {
    alert("Adresse email invalide !");
    return;
  }

  alert("Merci ! Votre message a été soumis.");
  document.getElementById("contactForm").reset();
});

function validateEmail(email) {
  // Simple regex pour vérifier l'email
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
