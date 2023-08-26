function playAnimalSound(letter){
    var animalSound = new Audio ("./Animal-Sounds/"+letter+".mp3");
    animalSound.play();
}

function addAnimation(letter){
    var activeButton = $("#"+letter);
    activeButton.addClass("pressed");

    setTimeout(function() {
        activeButton.removeClass("pressed");
}, 100)
}

$(".btn").on("click", function(){
    var animalName = this.id;
    playAnimalSound(animalName);
    addAnimation(animalName);
})

$(document).on("keydown", function(event){
    var pressedKey = event.key;
    playAnimalSound(pressedKey);
    addAnimation(pressedKey);
})
