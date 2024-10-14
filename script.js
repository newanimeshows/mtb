// Time in seconds (25 seconds countdown)
let countdownTime = 25;

function updateCountdown() {
    // Decrease the countdown time by 1 second
    countdownTime--;

    // If the countdown reaches 0, stop it and show 00:00:00
    if (countdownTime <= 0) {
        clearInterval(interval);
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        return;
    }

    // Calculate hours, minutes, and seconds from the countdown time
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    // Display the updated time
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Start the interval to update the countdown every second
const interval = setInterval(updateCountdown, 1000);

// Initialize the countdown display
updateCountdown();
