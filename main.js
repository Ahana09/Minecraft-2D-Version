var canvas = new fabric.Canvas ('myCanvas')

player_x = 10
player_y = 10

block_width = 30 
block_height = 30 

var player_object = ""
var block_object = ""

function player_update () 
{
fabric.Image.fromURL ("player.png" , function (Img) {
player_object = Img
player_object.scaleToWidth (150)
player_object.scaleToHeight (150)
player_object.set({
    top:player_y, left:player_x
});
canvas.add(player_object); 

}
);
}

player_update(); 

function block_update (block_img_name) 
{
fabric.Image.fromURL (block_img_name , function (Img) {
block_object = Img
block_object.scaleToWidth (block_width)
block_object.scaleToHeight (block_height)
block_object.set({
    top:player_y, left:player_x
});
canvas.add(block_object); 

}
);
}

block_update('cloud.jpg');

window.addEventListener("keydown" , myKeydown); 

function myKeydown (e)
 { 

keyPressed=e.keyCode;
console.log(keyPressed); 
if (e.shiftKey == true && keyPressed == '80')
{
console.log("p and shift is pressed together"); 
block_width = block_width + 10;
block_height = block_height + 10;
document.getElementById("current_width").innerHTML = block_width; 
document.getElementById("current_height").innerHTML = block_height; 
}

if (e.shiftKey == true && keyPressed == '77')
{
    console.log("m and shift is pressed together"); 
    block_width = block_width - 10;
     block_height = block_height - 10;
    document.getElementById("current_width").innerHTML = block_width; 
    document.getElementById("current_height").innerHTML = block_height; 
}


    if (keyPressed=='37') 
    {
    left ()
    } 

    if (keyPressed=='38')
    {
        up ()
    }

    if (keyPressed=='39')
    {
        right()
    }


    if (keyPressed=='40')
    {
        down()
    }

    if (keyPressed=='67')
    {
         block_update('cloud.jpg')
    }

    if (keyPressed=='68')
    {
         block_update('dark_green.png')
    }

    if (keyPressed=='71')
    {
         block_update('ground.png')
    }

    if (keyPressed=='76')
    {
         block_update('light_green.png')
    }

    if (keyPressed=='82')
    {
         block_update('roof.jpg')
    }

    if (keyPressed=='84')
    {
         block_update('trunk.jpg')
    }

    if (keyPressed=='85')
    {
         block_update('unique.png')
    }

    if (keyPressed=='87')
    {
         block_update('wall.jpg')
    }

    if (keyPressed=='89')
    {
         block_update('yellow_wall.png')
    }

}


function up ()

{ 
    if (player_y >= 0 ) 
    {
       player_y = player_y - block_height;
       canvas.remove (player_object);
       player_update (); 
    }


}

function down ()

{
    if (player_y <= 500 )
    {
       player_y = player_y + block_height; 
       canvas.remove (player_object); 
       player_update (); 
    }
}

function left ()

{
    if (player_x >= 0 )
    {
       player_x = player_x - block_width; 
       canvas.remove (player_object); 
       player_update (); 
    }
}

function right ()

{
    if (player_x <= 850 )
    {
       player_x = player_x + block_width; 
       canvas.remove (player_object); 
       player_update (); 
    }
}





