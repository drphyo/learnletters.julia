var animalName = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var question = [];
var answer =[];
var level = 0;
var started = false;

// this is to start and continue the game
function getRandoms(){
    question = [];
    answer = [];
    level++;
    $("h1").text("Level-"+level);
    $("h1").css("color","#D25380");
    var randomNumber = Math.floor(Math.random()*animalName.length);
    var randomAnimal = animalName[randomNumber];
    $(".questionbtn").css("background-image","url(./Animal-Photos/"+randomAnimal+".jpg)");
    $(".letter").text(randomAnimal.toUpperCase());
    question.push(randomAnimal);
    playAnimalSound(randomAnimal);
    getRandomAnswers(randomAnimal, randomNumber);
    animalName = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
}

// this goes to getRandoms
function getRandomAnswers(animal, number){
    var randomTrueAnswer = Math.floor(Math.random()*3+1);

    var animalName1 = animalName.splice(number,1);
    var randomNumber1 = Math.floor(Math.random()*animalName.length);
    var randomAnimal1 = animalName[randomNumber1];

    var animalName2 = animalName.splice(randomNumber1,1);
    var randomNumber2 = Math.floor(Math.random()*animalName.length);
    var randomAnimal2 = animalName[randomNumber2];

    $("#a"+randomTrueAnswer).css("background-image","url(./Animal-Photos/"+animal+".jpg)");
    $(".a"+randomTrueAnswer).text(animal.toUpperCase());
    if (randomTrueAnswer === 1){
        $("#a2").css("background-image","url(./Animal-Photos/"+randomAnimal1+".jpg)");
        $(".a2").text(randomAnimal1.toUpperCase());
        $("#a3").css("background-image","url(./Animal-Photos/"+randomAnimal2+".jpg)");
        $(".a3").text(randomAnimal2.toUpperCase());
    } else if (randomTrueAnswer === 2) {
        $("#a1").css("background-image","url(./Animal-Photos/"+randomAnimal1+".jpg)");
        $(".a1").text(randomAnimal1.toUpperCase());
        $("#a3").css("background-image","url(./Animal-Photos/"+randomAnimal2+".jpg)");
        $(".a3").text(randomAnimal2.toUpperCase());
    } else {
        $("#a1").css("background-image","url(./Animal-Photos/"+randomAnimal1+".jpg)");
        $(".a1").text(randomAnimal1.toUpperCase());
        $("#a2").css("background-image","url(./Animal-Photos/"+randomAnimal2+".jpg)");
        $(".a2").text(randomAnimal2.toUpperCase());
    }
}

// this is for random question button
function playAnimalSound(animal){
    var animalSound = new Audio("./Animal-Sounds/"+animal+".mp3");
    animalSound.play();
}

// this is for answer button
function addAnimation(id){
    var activeButton = $("#"+id);
    activeButton.addClass("pressed");

    setTimeout(function(){
        activeButton.removeClass("pressed");
    },100)
}

// this is keydwon action
$(".startbutton").on("click",function(){
    if (!started){
        getRandoms();
        started = true;
        $(".startbutton").addClass("hide");
    }    
})

// this is answer action
$(".btn").on("click", function(){
    var pressedButton = this.id;
    addAnimation(pressedButton);
    var insideText = $("#"+pressedButton).text();
    answer.push(insideText.toLowerCase());

    checkAnswer();
})

// this goes to answer action
function checkAnswer(){
    if (answer[0] === question [0]) {
        var correctSound = new Audio("./Animal-Sounds/correct.mp3");
        correctSound.play();

        setTimeout (function(){
            getRandoms();
        },2000)
    } else {
        $("h1").text("Level failed");
        $("h1").css("color","red");
        var wrongSound = new Audio("./Animal-Sounds/wrong.mp3");
        wrongSound.play();
        $(".startbutton").removeClass("hide");
        $(".startbutton").text("Restart");
        $("body").css("background-color","red");
        setTimeout (function(){
            $("body").css("background-color","#FFF0F5");
        },100);
        restart();}   
}

function restart(){
    started = false;
    question = [];
    answer = [];
    level = 0;
}







