var sounds = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "snare.mp3", "crash.mp3", "kick-bass.mp3"];

function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
// function whiteColor() {
//     this.style.colo
// }
function playSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/" + sounds[0]);
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/" + sounds[1]);
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/" + sounds[2]);
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/" + sounds[3]);
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/" + sounds[4]);
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/" + sounds[5]);
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/" + sounds[6]);
            audio.play();
            break;
        default:
            break;
    }

}
var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
document.addEventListener("keypress", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(key) {
    var buttonSelected = document.querySelector("." + key);
    buttonSelected.classList.add("pressed");
    setTimeout(
        function () {
            buttonSelected.classList.remove("pressed");
        },
        100
    );
}
