classical="";
folk="";
instrumental="";
pop_music="";
rock="";
hindi="";
english="";
tamil="";
punjabi="";
french="";
function setup(){
    canvas=createCanvas(500, 400);
    canvas.center();
    
    video=createCapture(VIDEO);
    video.hide();
}
function preload(){
    classical=loadSound('CLASSICAL.mp3');
    folk=loadSound('FOLK.mp3');
    instrumental=loadSound('INSTRUMENTAL.mp3');
    pop_music=loadSound('POP.mp3');
    rock=loadSound('ROCK.mp3');
    hindi=loadSound('Hindi.mp3');
    english=loadSound('English.mp3');
    tamil=loadSound('TAMIL.mp3');
    french=loadSound('FRENCH.mp3');
    punjabi=loadSound('PUNJABI.mp3');
}
function draw(){
    image(video, 0, 0, 500, 400);
}