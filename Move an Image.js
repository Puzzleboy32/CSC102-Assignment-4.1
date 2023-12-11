var dir_h='right';
var dir_v='down';
//This button will take the image back where it is and reset.
function reset1(){
clearTimeout(my_time);
document.getElementById('ball').style.left= "700px";
document.getElementById('ball').style.top= "400px";
document.getElementById("msg").innerHTML="";
}

function disp(){
var step=2;

var y=document.getElementById('ball').offsetTop;
var x=document.getElementById('ball').offsetLeft;
//This is where the ball will be moving 
if(x >= 900 ){
dir_h = 'left';
}
if(x <= 600 ){
dir_h = 'right';
}
if(dir_h=='right'){x= x +step;}
else{x=x - step;}

if(y >= 500 ){
dir_v = 'up';
}
if(y <= 100 ){
dir_v = 'down';
}

if(dir_v=='down'){y= y +step;}
else{y=y - step;}
// This is where it tells me that it move up and down and side to side.
document.getElementById('ball').style.top= y + "px"; // vertical movment
document.getElementById('ball').style.left= x + "px"; // horizontal  movment
}
//This is the button how it start and the more times of clicking start it goes faster and faster. 
function start(){
    disp();
    var y=document.getElementById('ball').offsetTop;
    var x=document.getElementById('ball').offsetLeft;
    document.getElementById("msg").innerHTML="X: " + x  + " Y : " + y
    my_time=setTimeout('start()',10);
    }