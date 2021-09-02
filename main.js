var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var block_Img_object = "";

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img){

    block_Img_object = Img;

    block_Img_object.scaleToWidth(700);
    block_Img_object.scaleToHeight(510);
    block_Img_object.set({
    top:0,
    left:0
    });
    canvas.add( block_Img_object);
    });
}

function playSound(){
	x.play();
}
window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    Keypress = e.keyCode;

    if(Keypress == '38'){
        new_image();
    }
}