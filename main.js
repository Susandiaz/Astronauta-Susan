canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
astronauta_ancho=120;
astronauta_alto=100;

background_image = "luna.jpg";

astronauta_image = "astronauta1.png";

astronauta_x = 10;
astronauta_y = 10;

//Crea la función "add()"
function add(){
background_imgTag= new Image(); //Define la variable con una nueva imagen
background_imgTag.onload = uploadBackground; // Define una función para cargar esta variable
background_imgTag.src= background_image;  // Carga la imagen

astronauta_imgTag= new Image(); //Define la variable con una nueva imagen
astronauta_imgTag.onload = uploadastronauta; // Define una función para cargar esta variable
astronauta_imgTag.src= astronauta_image; // Carga la imagen
}

//Crea una función "uploadBackground()".
                              
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);  //Dibuja la imagen de fondo
    }   
    

//Crea una función "uploadrover()".

function uploadastronauta(){
    ctx.drawImage(astronauta_imgTag, astronauta_x, astronauta_y, astronauta_ancho, astronauta_alto )  
    }  //Dibuja la imagen del explorador


window.addEventListener( "keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
    
            if(keyPressed == "38")
                {
                    up();
            }
            if(keyPressed =="40")
            {
                down();
            }

            if(keyPressed == "37")
            {
                left();
            }
            if(keyPressed == "39")
            {
                right();
            }
        }
    


     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
        




    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 


function up()
{
    if(astronauta_y >=0)
    {
        astronauta_y = astronauta_y - 10;
        uploadBackground();
        uploadastronauta();
    }
}
function down()
{

    if(astronauta_y <=500)
    {
        astronauta_y = astronauta_y + 10;
        uploadBackground();
        uploadastronauta();
    }
}
function right(){
    if(astronauta_x >=0){
        astronauta_x= astronauta_x +10;
        uploadBackground();
        uploadastronauta();
    }
    
}
function left(){
    if(astronauta_x <=500){
        astronauta_x= astronauta_x-10;
        uploadBackground();
        uploadastronauta();
    }
    
}