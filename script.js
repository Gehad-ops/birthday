//
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("backgroundMusic");

    // Attempt to play audio after a user interaction (like clicking the "Next" button)
    document.getElementById("nextButton").addEventListener("click", function() {
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    });
});


// Slide transition for Next button
document.getElementById("nextButton").addEventListener("click", function () {
    document.getElementById("slide1").classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("slide1").style.display = "none";
        document.getElementById("slide2").style.display = "flex";
        document.getElementById("slide2").classList.remove("fade-out");
        document.getElementById("slide2").classList.add("fade-in");
    }, 500);
});

// Gift button transition to third slide
document.getElementById("giftButton").addEventListener("click", function () {
    document.getElementById("slide2").classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("slide2").style.display = "none";
        document.getElementById("slide3").style.display = "flex";
        document.getElementById("slide3").classList.remove("fade-out");
        document.getElementById("slide3").classList.add("fade-in");
    }, 500);
});

// Back to second slide from third slide
document.getElementById("backToSecond").addEventListener("click", function () {
    document.getElementById("slide3").classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("slide3").style.display = "none";
        document.getElementById("slide2").style.display = "flex";
        document.getElementById("slide2").classList.remove("fade-out");
        document.getElementById("slide2").classList.add("fade-in");
    }, 500);
});

// Set the countdown date (Malaysia time)
const countdownDate = new Date("October 18, 2024 00:00:00 GMT+0800").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate time left
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown div
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, enable the Next button
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("nextButton").disabled = false; // Enable the button
    }
}, 1000);

// Slide transition for Next button
document.getElementById("nextButton").addEventListener("click", function () {
    document.getElementById("slide1").classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("slide1").style.display = "none";
        document.getElementById("slide2").style.display = "flex";
        document.getElementById("slide2").classList.remove("fade-out");
        document.getElementById("slide2").classList.add("fade-in");
    }, 500);
});
