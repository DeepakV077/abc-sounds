// Getting innerHTML of buttons
// For the buttons
let buttonsHtml = document.querySelectorAll(".letters").length;
for (let i = 0; i < buttonsHtml; i++) {
    document.querySelectorAll(".letters")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML.toUpperCase();
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        updateCounter();
    });
}

// For the keyboard
document.addEventListener("keydown", function (event) {
    let key = event.key.toUpperCase();
    if (/^[A-Z]$/.test(key)) {
        playSound(key);
        buttonAnimation(key);
        updateCounter();
    }
});

// Counter functionality
let count = 0;
function updateCounter() {
    count++;
    document.getElementById("counter").textContent = count;
}

// Reset counter functionality
document.getElementById("reset-counter").addEventListener("click", function () {
    count = 0;
    document.getElementById("counter").textContent = count;
});

// Function to play sound based on the letter clicked or pressed
function playSound(letter) {
    let validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (validLetters.includes(letter)) {
        let audio = new Audio("sounds/alphasounds-" + letter.toLowerCase() + ".mp3");
        audio.play();
    } else {
        console.log("Unsupported letter: " + letter);
    }
}

// Function to animate the button
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey.toLowerCase());
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
