// All the items used in the game are declared here
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let closedDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let openDoor1 = '';
let openDoor2 = '';
let openDoor3 = '';
let startButton = document.getElementById('start');
let currentlyPalying = true;
// function to check whether the door was opened or not
isClicked = (door) =>{
    if (door.src === closedDoorPath) {
        return false;
      } else {
        return true;
    }
}
// This is the function that checks the winning condition and also reduce gate number after door is opened
playDoor = (door) =>{
        numClosedDoors --;   
        if(numClosedDoors === 0){
            gameOver("win");
        }else if(isBot(door)){
            gameOver();
        } 
}
// this is the event handle to open the door 1
doorImage1.onclick = () =>{
    if(!isClicked(doorImage1) && currentlyPalying === true){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
    }
}
// this is the event handle to open the door 2
doorImage2.onclick = () =>{
    if(!isClicked(doorImage2)&& currentlyPalying === true){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
    }
}
// this is the event handle to open the door 3
doorImage3.onclick = () =>{
    if(!isClicked(doorImage3)&& currentlyPalying === true){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
    }
}
// this is the start new round function
startButton.onclick =()=>{
    if(!currentlyPalying){
        startRound();
    }      
}
// this is the function that randomly generate the doors order
randomChoreBootDoor = () =>{
   let choreDoor = Math.floor(Math.random() *numClosedDoors);
   if(choreDoor === 0){
           openDoor1 = botDoorPath;
           openDoor2 = spaceDoorPath;
           openDoor3 = beachDoorPath;
        }else if(choreDoor===1){
        openDoor3 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor1 = beachDoorPath;
       }else if(choreDoor===2){
        openDoor2 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor3 = beachDoorPath;
   }
}
// this is the function that display the winner aur loser message
gameOver=(status)=>{
    if(status === 'win'){
        startButton.innerHTML = "You win! Play again?";
    }else{
        startButton.innerHTML ="Game over! Play again?.";
    }
    currentlyPalying = false;
}
// this is the function that checks whether ChoreBot is behind the door or Not
isBot = (door)=>{
    if(door.src === botDoorPath){
        return true;
    }else 
      return false;
} 
// this function resets the game values
startRound = ()=>{
 numClosedDoors = 3;
 doorImage1.src = closedDoorPath;
 doorImage2.src = closedDoorPath;
 doorImage3.src = closedDoorPath;
 currentlyPalying = true;
 startButton.innerHTML = "Good Luck!";
 randomChoreBootDoor();    
}
startRound();
