document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const breakDecrement = document.getElementById("break-decrement");
    const sessionDecrement = document.getElementById("session-decrement");
    const breakIncrement = document.getElementById("break-increment");
    const sessionIncrement = document.getElementById("session-increment");
    const breakLength = document.getElementById("break-length");
    const sessionLength = document.getElementById("session-length");
    const timerLabel = document.getElementById("timer-label");
    const timeLeft = document.getElementById("time-left");
    const startStopButton = document.getElementById("start_stop");
    const resetButton = document.getElementById("reset");
    const beep = document.getElementById("beep");

    // Initial values
    let breakDuration = 5;
    let sessionDuration = 25;
    let isSession = true;
    let isRunning = false;
    let interval;

    // Update functions for break and session lengths
    function updateBreakLength() {
        if (!isRunning) {
            breakLength.textContent = breakDuration;
        }
    }

    function updateSessionLength() {
        if (!isRunning) {
            sessionLength.textContent = sessionDuration;
            timeLeft.textContent = `${sessionDuration}:00`;
        }
    }

    // Event listeners for increment and decrement buttons
    breakDecrement.addEventListener("click", () => {
        if (breakDuration > 1 && !isRunning) {
            breakDuration--;
            updateBreakLength();
        }
    });

    breakIncrement.addEventListener("click", () => {
        if (breakDuration < 60 && !isRunning) {
            breakDuration++;
            updateBreakLength();
        }
    });

    sessionDecrement.addEventListener("click", () => {
        if (sessionDuration > 1 && !isRunning) {
            sessionDuration--;
            updateSessionLength();
        }
    });

    sessionIncrement.addEventListener("click", () => {
        if (sessionDuration < 60 && !isRunning) {
            sessionDuration++;
            updateSessionLength();
        }
    });

    // Start/Stop button click event
    startStopButton.addEventListener("click", () => {
        if (!isRunning) {
            isRunning = true;
            interval = setInterval(updateTimer, 1000);
        } else {
            isRunning = false;
            clearInterval(interval);
        }
    });

    // Reset button click event
    resetButton.addEventListener("click", () => {
        clearInterval(interval);
        isRunning = false;
        isSession = true;
        breakDuration = 5;
        sessionDuration = 25;
        updateBreakLength();
        updateSessionLength();
        timerLabel.textContent = "Session";
        timeLeft.textContent = "25:00";
        beep.pause();
        beep.currentTime = 0;
    });

    // Update timer function
    function updateTimer() {
        // Implement the timer logic here
    }
});
