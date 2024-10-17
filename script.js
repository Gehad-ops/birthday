document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("backgroundMusic");

    // Attempt to play the audio when the site loads
    audio.play().catch(error => {
        console.error("Error playing audio:", error);
    });

    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", function() {
        // You can choose to play the audio again or control other functionalities here
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
document.getElementById("giftButton").addEventListener("click", function (e) {
   // Sparkle explosion effect
for (let i = 0; i < 30; i++) {
    let sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = e.clientX + (Math.random() * 200 - 100) + "px"; // Increase range
    sparkle.style.top = e.clientY + (Math.random() * 200 - 100) + "px";   // Increase range
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);  // Remove sparkle after animation
}


    // Slide transition code
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

// Function to create heart rain
function createHeartRain() {
    const heart = document.createElement("div");  // Create a heart
    heart.classList.add("heart");  // Add heart CSS class
    heart.textContent = "❤️";  // Use the heart emoji

    // Position the heart randomly on the screen's width
    heart.style.left = Math.random() * 100 + "vw";

    // Add the heart to the document
    document.body.appendChild(heart);

    // Remove the heart after its fall (3s)
    setTimeout(() => heart.remove(), 3000);
}

// Trigger heart rain when the last slide appears
document.getElementById("giftButton").addEventListener("click", function () {
    // Start creating hearts at an interval (every 300ms)
    setInterval(createHeartRain, 300);
});


// Your other JavaScript event listeners here...

// Song auto-play when the site loads
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("backgroundMusic");
    audio.volume = 0.3;  // Set volume to 50%
    audio.play().catch(error => {
        console.log("Audio couldn't play automatically due to user interaction requirements.");
    });
});
