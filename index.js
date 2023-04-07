document.getElementById("gameTitle").innerText = "Point & Click Adventure";

const gameWindow = document.getElementById("gameWindow");

const offsetCharacter = 7;

const mainCharacter = document.getElementById("mainCharacter");

const signMessage = document.getElementById("signMessage");

const fountain = document.getElementById("fountain");

const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

var waterSound = new Audio("water.mp3");

gameWindow.onclick = function(e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; // x position within the element
    var y = e.clientY - rect.top; // y position within the element

    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";


    console.log(x + ", " + y);


    setTimeout(function(){
        switch(e.target.id) {
            case "sign":
                showMessage("This is not a sign");
                break;
            case "fountain":
                playSound();
                break;
            default:

            setTimeout(function() {
                hideMessage();
            }, 300)
            break;
        }
    }, 1500);
}

function showMessage(message) {
    mainCharacterSpeech.innerHTML = message
    mainCharacterSpeech.style.opacity = 1;
    signMessage.style.opacity = 1;
}

function hideMessage() {
    mainCharacterSpeech.style.opacity = 0;
    signMessage.style.opacity = 0;
}

function playSound() {
    waterSound.play;
}