var buttonsHtml = document.querySelectorAll(".letters").length;
for (var i = 0; i < buttonsHtml; i++) {
    document.querySelectorAll(".letters")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    updateCounter();
});

}


document.addEventListener("keydown", function (event) {
    var key = event.key.toUpperCase();
    playSound(key);
    buttonAnimation(key);
    updateCounter();
});

let count = 0;
function updateCounter() {
    count++;
    document.getElementById("counter").textContent = count;
}

document.getElementById("reset-counter").addEventListener("click", function () {
    count = 0;
    document.getElementById("counter").textContent = count;
});


function animateButton(letter) {
    const button = document.querySelector("." + letter.toLowerCase());
    if (button) {
        button.classList.add("pressed");

        // Random background color
        button.style.backgroundColor = getRandomColor();

        setTimeout(() => {
            button.classList.remove("pressed");
            button.style.backgroundColor = ""; // Reset to CSS default
        }, 150);
    }
}

function getRandomColor() {
    const colors = ["#e74c3c", "#8e44ad", "#3498db", "#27ae60", "#f39c12", "#2c3e50"];
    return colors[Math.floor(Math.random() * colors.length)];
}


function playSound(letter){
    switch(letter){
        case "A":
            var audio =new Audio("sounds/alphasounds-a.mp3");
            audio.play();
            break;
        case "B":
            var audio =new Audio("sounds/alphasounds-b.mp3");
            audio.play();
            break;
        case "C":
            var audio =new Audio("sounds/alphasounds-c.mp3");
            audio.play();
            break;
        case "D":
            var audio =new Audio("sounds/alphasounds-d.mp3");
            audio.play();
            break;
        case "E":
            var audio =new Audio("sounds/alphasounds-e.mp3");
            audio.play();
            break;
        case "F":
            var audio =new Audio("sounds/alphasounds-f.mp3");
            audio.play();
            break;
        case "G":
            var audio =new Audio("sounds/alphasounds-g.mp3");
            audio.play();
            break;
        case "H":
            var audio =new Audio("sounds/alphasounds-h.mp3");
            audio.play();
            break;
        case "I":
            var audio =new Audio("sounds/alphasounds-i.mp3");
            audio.play();
            break;
        case "J":
            var audio =new Audio("sounds/alphasounds-j.mp3");
            audio.play();
            break;
        case "K":
            var audio =new Audio("sounds/alphasounds-k.mp3");
            audio.play();
            break;
        case "L":
            var audio =new Audio("sounds/alphasounds-l.mp3");
            audio.play();
            break;
        case "M":
            var audio =new Audio("sounds/alphasounds-m.mp3");
            audio.play();
            break;
        case "N":
            var audio =new Audio("sounds/alphasounds-n.mp3");
            audio.play();
            break;
        case "O":
            var audio =new Audio("sounds/alphasounds-o.mp3");
            audio.play();
            break;
        case "P":
            var audio =new Audio("sounds/alphasounds-p.mp3");
            audio.play();
            break;
        case "Q":
            var audio =new Audio("sounds/alphasounds-q.mp3");
            audio.play();
            break;
        case "R":
            var audio =new Audio("sounds/alphasounds-r.mp3");
            audio.play();
            break;
        case "S":
            var audio =new Audio("sounds/alphasounds-s.mp3");
            audio.play();
            break;
            
        case "T":
            var audio =new Audio("sounds/alphasounds-t.mp3");
            audio.play();
            break;
        case "U":
            var audio =new Audio("sounds/alphasounds-u.mp3");
            audio.play();
            break;
        case "V":
            var audio =new Audio("sounds/alphasounds-v.mp3");
            audio.play();
            break;
        case "W":
            var audio =new Audio("sounds/alphasounds-w.mp3");
            audio.play();
            break;
        case "X":
            var audio =new Audio("sounds/alphasounds-x.mp3");
            audio.play();
            break;
        case "Y":
            var audio =new Audio("sounds/alphasounds-y.mp3");
            audio.play();
            break;
        case "Z":
            var audio =new Audio("sounds/alphasounds-z.mp3");
            audio.play();
            break;
        default:
            console.log(letter);
    }
}


