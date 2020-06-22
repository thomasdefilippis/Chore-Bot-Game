let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const startButton = document.getElementById('start');
let currentlyPlaying = true;

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    }else{
        return false;
    };
};

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    }else{
        return true;
    };
};

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    }else if (isBot(door)){
        gameOver();
    };
};

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random()*3);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1){
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    };
};

doorImage1.onclick = () =>{
    if(!isClicked(door1) && currentlyPlaying){
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    };
};

doorImage2.onclick = function (){
    if(!isClicked(door2) && currentlyPlaying){
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    };
};

doorImage3.onclick = function () {
    if(!isClicked(doorImage3) && currentlyPlaying){
        doorImage3.src = openDoor3
        playDoor(doorImage3);
    };
};

startButton.onclick = () => {
    if(!currentlyPlaying){
    startRound();
    }
};

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = "Good Luck!";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play Again?'
    }else{
        startButton.innerHTML = "Game Over! Play Again?";
    }
    currentlyPlaying = false;
};

startRound();