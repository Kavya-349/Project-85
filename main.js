//Create a reference for canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//Give specific height and width to the car image
var car_width = 75;
var car_height = 100;

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

//Set initial position for a car image.
var car_x = 5;
var car_y = 255;

function add() {
	//upload car, and background images on the canvas.
	var background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	var greencar_imageTag = new Image();
	greencar_imageTag.onload = uploadgreencar;
	greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imageTag, car_x, car_y, car_width, car_height);	
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
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	
	if(car_y>=225) {
		car_y = car_y - 10;
		console.log("When up presses x = "+ car_x + " | y = "+car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(car_y<=345) {
		car_y = car_y + 10;
		console.log("When down presses x = "+ car_x + " | y = "+car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(car_x > 0) {
		car_x = car_x - 5;
		console.log("When left presses x = "+ car_x + " | y = "+car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(car_x  < 700) {
		car_x = car_x + 5;
		console.log("When right presses x = "+ car_x + " | y = "+car_y);
		uploadBackground();
		uploadgreencar();
	}
}
