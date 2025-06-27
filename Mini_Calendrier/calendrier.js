const date = new Date();
const calendar = document.querySelector(".calendar");
const monthEl = calendar.querySelector(".date h1");
const yearEl = calendar.querySelector(".date p");
const daysEl = calendar.querySelector(".days");
const prev = calendar.querySelector(".prev");
const next = calendar.querySelector(".next");

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function renderCalendar(month, year) {
  monthEl.textContent = months[month];
  yearEl.textContent = year;

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  daysEl.innerHTML = "";
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    daysEl.appendChild(empty);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dayEl = document.createElement("div");
    dayEl.textContent = day;
    if (
      day === date.getDate() &&
      month === date.getMonth() &&
      year === date.getFullYear()
    ) {
      dayEl.classList.add("today");
    }
    daysEl.appendChild(dayEl);
  }
}

prev.addEventListener("click", () => {
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  if (currentMonth === 11) currentYear--;
  renderCalendar(currentMonth, currentYear);
});

next.addEventListener("click", () => {
  currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  if (currentMonth === 0) currentYear++;
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);
