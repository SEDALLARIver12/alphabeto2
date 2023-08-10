// Create a reference for the canvas element
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var img_width = 100;
var img_height = 100;

var img_x = canvas.width / 2 - img_width / 2;
var img_y = canvas.height / 2 - img_height / 2;

// Add event listener to detect keypress events
document.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    // Get the key code of the pressed key
    var keyPressed = e.key;
    console.log("Key pressed:", keyPressed);

    // Check if the key pressed is an alphabetical character
    if (/^[a-zA-Z]$/.test(keyPressed)) {
        alphabetkey();
    } else if (/^[0-9]$/.test(keyPressed)) {
        numberkey();
    } else if (keyPressed.startsWith("F") || ["Tab", "Enter", "Escape", "Backspace"].includes(keyPressed)) {
        specialkey();
    } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(keyPressed)) {
        arrowkey();
    } else {
        otherkey();
    }
}

function uploadImage(img_src) {
    var img = new Image();
    img.src = img_src;
    img.onload = function () {
        // Clear the canvas and draw the image
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, img_x, img_y, img_width, img_height);
    };
}

function alphabetkey() {
    // Upload an image with a message for alphabetical keys
    uploadImage("Alpkey.png");
}

function numberkey() {
    // Upload an image with a message for numerical keys
    uploadImage("numkey.png");
}

function specialkey() {
    // Upload an image with a message for special keys
    uploadImage("spkey.png");
}

function arrowkey() {
    // Upload an image with a message for the arrow key
    uploadImage("Arrykey.png");
}

function otherkey() {
    // Upload an image with a message for other keys
    uploadImage("otherkey.png");
}

