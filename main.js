   
   var canvas = new fabric.Canvas('myCanvas');
   var x= document.getElementById("myAudio");
   
   
   
function newImage()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
		blockImageObject = Img;

		blockImageObject.scaleTOWidth(700);
	    blockImageObject.scaleTOHeight(510);
		blockImageObject.set({
	    top:0,
		left:0
		});
		canvas.add(blockImageObject);
	});
	
}

function playsound(){
	x.play();
}
