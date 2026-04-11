const upperTeeth = [18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28];
const lowerTeeth = [48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38];

const states = ["decay","filled","crown","missing"];

// CREATE TEETH
function createTooth(num) {
  return `
  <div class="tooth">
    <svg viewBox="0 0 60 70">
      <rect class="face" x="10" y="10" width="40" height="50"/>
    </svg>
    <span>${num}</span>
  </div>`;
}

// LOAD ODONTOGRAM
function loadOdontogram() {
  const container = document.getElementById("odontograma");
  if (!container) return;

  let html = '';
  html += upperTeeth.map(t => createTooth(t)).join("");
  html += lowerTeeth.map(t => createTooth(t)).join("");

  container.innerHTML = html;

  container.addEventListener("click", e => {
    if (e.target.classList.contains("face")) {
      let index = states.findIndex(s => e.target.classList.contains(s));

      if (index === -1) {
        e.target.classList.add(states[0]);
      } else if (index === states.length - 1) {
        e.target.classList.remove(...states);
      } else {
        e.target.classList.remove(...states);
        e.target.classList.add(states[index + 1]);
      }
    }
  });
}

// LOCAL STORAGE
function saveData() {
  const inputs = document.querySelectorAll("input, textarea");
  const data = [];

  inputs.forEach(i => data.push(i.value));

  localStorage.setItem("clinicalData", JSON.stringify(data));
}

function loadData() {
  const saved = JSON.parse(localStorage.getItem("clinicalData"));

  if (saved) {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((i, index) => i.value = saved[index] || "");
  }
}

// INIT
window.addEventListener("DOMContentLoaded", () => {
  loadOdontogram();
  loadData();
});

window.addEventListener("input", saveData);