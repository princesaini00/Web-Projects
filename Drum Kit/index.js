for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        makesound(this.textContent);
        buttonAnimation(this.textContent);
    });
}

document.addEventListener("keydown", function (event) {

    makesound(event.key);
    buttonAnimation(event.key);
});


function makesound(key) {

    switch (key) {
        case "w":
            playsound("tom-1");
            break;

        case "a":
            playsound("tom-2");
            break;

        case "s":
            playsound("tom-3");
            break;

        case "d":
            playsound("tom-4");
            break;

        case "j":
            playsound("crash");
            break;

        case "k":
            playsound("kick-bass");
            break;

        case "l":
            playsound("snare");
            break;

        default: console.log(this.textContent);
    }
}

function playsound(sound) {
    var audio = new Audio(`sounds/${sound}.mp3`);
    audio.currentTime = 0;
    audio.play();
}

function buttonAnimation(key) {

    var buttonPressed = document.querySelector("." + key);
    buttonPressed.classList.add("pressed");

    setTimeout(function () {
        buttonPressed.classList.remove("pressed");
    }, 100);
}