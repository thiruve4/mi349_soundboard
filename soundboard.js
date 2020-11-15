var mgs_button = document.getElementById("mgs");
var quack_button = document.getElementById("quack");
var money_button = document.getElementById("nope");

mgs_button.addEventListener('click', function () {
    var audio = document.getElementById("mgs_audio");
    audio.play();
});

quack_button.addEventListener('click', function () {
    var audio = document.getElementById("quack_audio");
    audio.play();
});

money_button.addEventListener('click', function () {
    var audio = document.getElementById("nope_audio");
    audio.play();
});