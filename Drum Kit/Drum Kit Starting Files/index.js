
document.querySelectorAll(".drum").forEach(item => {
    item.addEventListener("click", () => {
        var buttonInnerText = item.innerHTML;
        play(buttonInnerText);
    });

});

document.addEventListener("keydown", (e) => {
    play(e.key);
});
// document.querySelectorAll(".drum").forEach(item => {
//     item.addEventListener("keydown", (event) => {
//         play(event.key);
//     })

// })


function play(key) {
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default: console.log(buttonInnerText)
            break;
    }
}