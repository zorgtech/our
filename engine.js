var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),
width = 400,
height = 400,
keys={},
enemys=[],
bullets=[],
framerate=25,
waves=[8,10,12,16],
toDelete={bullets:[],enemys:[]},
player=new Player(width/2-25,400-25),
healthbar=new healthBar(0,0,100,20);
var game;

start();

doWave(0);
function init(){

game = setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.action();
    healthbar.draw();
    for (i in enemys){
        try {
            enemys[i].shoot();
            enemys[i].move();
            enemys[i].draw();
        } catch(err){}
    }
    for (i in bullets){
        try {
            bullets[i].checkCollision();
            bullets[i].move();
            bullets[i].draw();
        } catch(err){}
    }
}, 1000/framerate);

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
}