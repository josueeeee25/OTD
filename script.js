function openDoor() {
document.getElementById("imgStatus").src = "images/jmc.gif";
    document.getElementById("doorStatus").innerHTML = "LET'S VOLT IN";
    document.getElementById('mp3File').play();
}
function closeDoor(){
    document.getElementById("imgStatus").src = "images/pngimg.com_-_door_PNG17597-removebg-preview.png";
    document.getElementById("doorStatus").innerHTML = "Kindly Open the Door";
    document.getElementById('mp3File').pause();
    document.getElementById('mp3File').currentTime = 0;
}