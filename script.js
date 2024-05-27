
let timer;
let seconds = 0;
let paused = 0;
let isRunning = false;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const stopButton = document.getElementById('stop-btn');
const darkModeButton = document.getElementById('dark-mode-btn');
const quoteElement = document.querySelector('.quote h2');
const footerSection = document.getElementById('footer');

const motivationalQuotes = [
    "You're doing great!",
    "Keep up the good work!",
    "Stay focused and keep moving forward!",
    "Believe in yourself!",
    "Success is on the way!",
    "You've got this!",
    "Never give up!"
];

function formatTime(sec) {
    let hrs = Math.floor(sec / 3600).toString().padStart(2, '0');
    let mins = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    let secs = (sec % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function updateTimer() {
    timerElement.textContent = formatTime(seconds);
}

function updateQuote() {
    if (paused === 0) {
        quoteElement.textContent = "Lets Go!";
    } else if (paused === 1) {
        quoteElement.textContent = `You've stopped ${paused} time.`;
    } else {
        quoteElement.textContent = `You've stopped ${paused} times.`;
    }
}

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    quoteElement.textContent = motivationalQuotes[randomIndex];
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
        isRunning = true;
        startButton.textContent = 'Continue';
        startButton.disabled = true;
        pauseButton.disabled = false;
        stopButton.disabled = false;
        displayRandomQuote();
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    paused += 1;
    updateQuote();
    footerSection.classList.add('gradient-background');
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateTimer();
    startButton.textContent = 'Start';
    startButton.disabled = false;
    pauseButton.disabled = true;
    stopButton.disabled = true;
    paused = 0;
    updateQuote();

}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

//to start with dark mode;
/*
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('dark-mode');
});
*/

