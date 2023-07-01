canvas = document.getElementById("myCanvas");

stx = canvas.getContext("2d");

color = "black";

stx.beginPath();

stx.strokeStyle = color;

stx.lineWidth = 2;

stx.arc(350, 210, 40 ,0 , 2*Math.PI);

stx.stroke();

canvas = document.getElementById("myCanvas");

stx = canvas.getContext("2d");

color = "blue";

stx.beginPath();

stx.strokeStyle = color;

stx.lineWidth = 2;

stx.arc(250, 210, 40 ,0 , 2*Math.PI);

stx.stroke();

canvas = document.getElementById("myCanvas");

stx = canvas.getContext("2d");

color = "red";

stx.beginPath();

stx.strokeStyle = color;

stx.lineWidth = 2;

stx.arc(450, 210, 40 ,0 , 2*Math.PI);

stx.stroke();

canvas = document.getElementById("myCanvas");

stx = canvas.getContext("2d");

color = "green";

stx.beginPath();

stx.strokeStyle = color;

stx.lineWidth = 2;

stx.arc(400, 260, 40 ,0 , 2*Math.PI);

stx.stroke();

canvas = document.getElementById("myCanvas");

stx = canvas.getContext("2d");

color = "yellow"
stx.beginPath();

stx.strokeStyle = color;

stx.lineWidth = 2;

stx.arc(300, 260, 40 ,0 , 2*Math.PI);

stx.stroke();


 function circle(mouseX,mouseY)
 {
    stx.beginPath();

    stx.strokeStyle = color;
    
    stx.lineWidth = 2;
    
    stx.arc(mouseX, mouseY, 40 ,0 , 2*Math.PI);
    
    stx.stroke();
 }
 