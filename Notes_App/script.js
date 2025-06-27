const addBtn = document.getElementById("addBtn");
const notesContainer = document.querySelector(".notes-container");

// Charger les notes depuis le stockage local
function showNotes() {
  notesContainer.innerHTML = ""; // Vider d'abord le conteneur
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");

  notes.forEach((noteText, index) => {
    const note = createNoteElement(noteText, index);
    notesContainer.appendChild(note);
  });
}

// Créer un élément de note
function createNoteElement(text = "", index) {
  const note = document.createElement("p");
  note.className = "input-box";
  note.contentEditable = true;
  note.innerText = text;

  const deleteBtn = document.createElement("img");
  deleteBtn.src = "delete.png";
  deleteBtn.onclick = () => deleteNote(index);
  note.appendChild(deleteBtn);

  // Sauvegarder automatiquement après modification
  note.oninput = () => updateNote(index, note.innerText);

  return note;
}

// Ajouter une nouvelle note
addBtn.addEventListener("click", () => {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.push(""); // Ajouter une note vide
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
});

// Mettre à jour une note
function updateNote(index, newText) {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes[index] = newText;
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Supprimer une note
function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

// Initialisation au chargement de la page
showNotes();
