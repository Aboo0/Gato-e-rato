
var backgroundImg,garden;
var gato;
var mouse;
var cat,cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;

function preload() {
  garden = loadImage("garden.png");

  cat1 = loadAnimation("cat1.png");
  cat2 = loadAnimation("cat2.png","cat3.png");
  cat3 = loadAnimation("cat4.png");

  mouse1 = loadAnimation("mouse1.png")
  mouse2= loadAnimation("mouse2.png","mouse3.png" )
  mouse3 = loadAnimation("mouse4.png")


}

function setup(){
    createCanvas(1000,800);
   
    gato = createSprite(870,600);
    mouse = createSprite(200,600);
    
    gato.addAnimation("catSentado",cat1 );
    mouse.addAnimation("mouse1",mouse1);

    mouse.scale = 0.2;
    gato.scale = 0.2;
}

function draw() {

    background(garden);

    if(gato.x - mouse.x <(gato.width - mouse.width)/2){
    gato.velocityX = 0;
   gato.addAnimation("animacaoFinal",cat3);
   gato.changeAnimation("animacaoFinal");

   mouse.addAnimation("mouse3",mouse3);
   mouse.changeAnimation("mouse3");


   gato.x = 300;
   gato.scale = 0.2;

    }
    drawSprites();



}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
 if(keyCode === LEFT_ARROW){


mouse.addAnimation("rato_provocando",mouse2);
 mouse.changeAnimation("rato_provocando");
 mouse.frameDelay = 25;

 gato.velocityX = -5;
gato.addAnimation("gatoAndando", cat2);
gato.changeAnimation("gatoAndando");
 }


}
