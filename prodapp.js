let timer;
let timeLeft = 25 * 60; // 25 minutes
let isRunning = false;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("alarm-sound").play();
      isRunning = false;
      return;
    }

    timeLeft--;
    updateDisplay();

    if (timeLeft % 60 === 0) showQuote(); // show quote every 1 minute

  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  timeLeft = 25 * 60;
  updateDisplay();
  document.getElementById("quote").textContent = '';
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function playMusic(event) {
  const file = event.target.files[0];
  if (file) {
    const music = document.getElementById("music");
    music.src = URL.createObjectURL(file);
    music.play();
  }
}

const quotes = [
  "Push through the pain. Greatness is on the other side.",
  "Don’t watch the clock. Do what it does: keep going.",
  "Your future is created by what you do today.",
  "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
  "Every minute you spend studying adds to your future value."
];

function showQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = random;
}

// Initial display
updateDisplay();
