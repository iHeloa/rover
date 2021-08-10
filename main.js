var background = "mars.jpg";
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var rover_x = 10;
var rover_y = 10;
var rover_width = 90;
var rover_height = 100;
var rover = "rover.png"
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover;
}
function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("left");
    }
}
function up(){
    if (rover_y >= 0){
        rover_y -= 10;
        console.log("When up arrow is pressed = " + rover_x + " - "+rover_y);
        uploadBackground();
        uploadrover();
    } 
}

function down(){
    if(rover_y <=500){
        rover_y += 10;
        console.log("When down arrow is pressed, x=" + rover_x +"| y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if (rover_x >= 0)
    {
        rover_x -= 10;
        console.log("When left arrow is pressed, x=" + rover_x +"| y= " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if (rover_x >= 700){
        rover_x += 10;
        console.log("When right arrow is pressed, x=" + rover_x +"| y=" +rover_y);
    }
}