// Time in seconds (set to 10 seconds for this use case)
let countdownTime = 10;  // Change this to 10 seconds

// Retrieve stored end time or set it
let endTime = localStorage.getItem('endTime') || (Date.now() + countdownTime * 1000);
localStorage.setItem('endTime', endTime);

function updateCountdown() {
    const now = Date.now();
    const timeLeft = Math.floor((endTime - now) / 1000);

    if (timeLeft <= 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = "EXPIRED!";

        // Disable the Join Telegram button after expiration
        disableJoinButton();
        return;
    }

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    // Update the countdown display
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Function to disable the "Join Telegram" button after time expiration
function disableJoinButton() {
    const joinButton = document.querySelector('.join-btn');
    joinButton.classList.add('disabled'); // Add a class to change its appearance
    joinButton.removeAttribute('href');   // Remove the link
    joinButton.style.cursor = 'not-allowed'; // Change cursor style to indicate it's disabled
    joinButton.textContent = "Expired";   // Change button text
}

// Select the "Join Telegram" button
const joinButton = document.querySelector('.join-btn');

// Add a click event listener to the button with vibration
joinButton.addEventListener('click', function() {
    if (navigator.vibrate) {
        navigator.vibrate(100); // Vibrates for 100 milliseconds
    }
});

// Set up the countdown interval
const interval = setInterval(updateCountdown, 1000);
updateCountdown();
