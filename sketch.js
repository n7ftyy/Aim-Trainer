var crosshair, crosshairImage;
var target, targetImage;
var backgroundImage;
var gameover, gameoverImage;
var score;
var targetGroup;
var count = 0;
var score = 0;

function preload() {
  backgroundImage = loadImage ("ICONS HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH/High_resolution_wallpaper_background_ID_77700338380.jpg");
  targetImage = loadImage ("ICONS HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH/istockphoto-1268320841-170667a-removebg-preview.png");
  crosshairImage = loadImage ("ICONS HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH/image-438-removebg-preview.png");
  //gameoverImage = loadImage ("ICONS HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH/360_F_211543376_kv7x0SwdITkWbqajGzglhcvZV25AsPsS.jpg") 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  crosshair = createSprite(200, 400)
  crosshair.addImage(crosshairImage)
  crosshair.scale = 1
  targetGroup = new Group();
}

function draw() {
  background(backgroundImage)
  
  score = Math.round(getFrameRate());
  spawnTargets();  
  drawSprites();
  textSize(35)
  fill("white")
  text("FPS : "+ score, 50, 50);
  text("count : "+ count, width -200, 50);
  crosshair.x = mouseX
  crosshair.y = mouseY  

  if(mousePressedOver(target)){
    target.destroy();
    count+=1    
    }    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function spawnTargets(){
  if(frameCount%50 === 0){
    target = createSprite(random(0, width),random(0, height))
    target.addImage(targetImage)
    target.scale = 0.2
    target.lifetime = 135    
    targetGroup.add(target)

  }
}
// THE LIFEIMT ISD NOT WORKING NOT VERY NICE I AM VERYU SAD NOYWWWWWWW P=LEASE FIX MICROSFT VIDUSL ADOEEEEE IW AANT TO EG GOOD AIMMNIN TMY GAMMME SO I CAN BE THE BESSTTEST OF THE GAME AND BE TRHE TKPO 12 OF THE 1 PERSONN  SO I CAN GET THE FREE ONEYS SO PLEASE FIX BECSUSDER I WANT TOI PLAUYT THE GAME MORE BUT TTHEN IF I DONT HAVR THE GOOF AIM THEN INW9IILL B THE SAD SO PLEASE FIX VIAULA STUDIO COODDEEEEE :(((
// hide cursor
//add score
