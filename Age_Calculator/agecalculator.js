const dobInput = document.getElementById('dob');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// Pour éviter de choisir une date future
const todayStr = new Date().toISOString().split('T')[0];
dobInput.setAttribute('max', todayStr);

calculateBtn.addEventListener('click', () => {
  const dobValue = dobInput.value;
  if (!dobValue) {
    resultDiv.textContent = "Veuillez sélectionner une date valide.";
    return;
  }

  const dob = new Date(dobValue);
  const now = new Date();

  if (dob > now) {
    resultDiv.textContent = "La date de naissance ne peut pas être dans le futur.";
    return;
  }

  // Calcul de la différence
  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    // nombre de jours dans le mois précédent
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Affichage
  resultDiv.textContent = `Vous avez ${years} an${years > 1 ? 's' : ''}, ${months} mois et ${days} jour${days > 1 ? 's' : ''}.`;
});
