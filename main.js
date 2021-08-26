var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg',Img);
    block_Img_object = Img;

    block_Img_object.scaleToWidth(750);
    block_Img_object.scaleToHeight(510);
    block_Img_object.set({
    top:0,
    left:0
    });
    canvas.add( block_Img_object);
    };
{}

function playSound(){
	x.play();
}
