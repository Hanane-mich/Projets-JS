const questions = [
  {
    question: "Quel est l’élément chimique avec le symbole 'O' ?",
    answers: ["Or", "Oxygène", "Osmium", "Ozone"],
    correct: "Oxygène"
  },
  {
    question: "Quel est le plus grand continent en superficie ?",
    answers: ["Afrique", "Asie", "Amérique du Nord", "Europe"],
    correct: "Asie"
  },
  {
    question: "Quel est le résultat de 12 x 3 ?",
    answers: ["36", "15", "23", "30"],
    correct: "36"
  },
  {
    question: "Qui a peint la Joconde ?",
    answers: ["Van Gogh", "Michel-Ange", "Léonard de Vinci", "Picasso"],
    correct: "Léonard de Vinci"
  },
  {
    question: "Quelle planète est la plus proche du Soleil ?",
    answers: ["Mars", "Mercure", "Vénus", "Terre"],
    correct: "Mercure"
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const submitBtn = document.getElementById("submit");
const progressEl = document.querySelector(".progress");

function loadQuestion() {
  const q = questions[index];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach(answer => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="radio" name="answer" value="${answer}" />
        ${answer}
      </label>`;
    answersEl.appendChild(li);
  });

  updateProgress();
}

function getSelected() {
  const radios = document.querySelectorAll("input[name='answer']");
  for (let radio of radios) {
    if (radio.checked) return radio.value;
  }
  return null;
}

function updateProgress() {
  const pourcentage = ((index) / questions.length) * 100;
  progressEl.style.width = pourcentage + "%";
}

submitBtn.addEventListener("click", () => {
  const selected = getSelected();
  if (!selected) return;

  if (selected === questions[index].correct) {
    score++;
  }

  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    quiz.innerHTML = `<h2>Vous avez eu ${score}/${questions.length} bonnes réponses !</h2>`;
    progressEl.style.width = "100%";
    submitBtn.style.display = "none";
  }
});

loadQuestion();
