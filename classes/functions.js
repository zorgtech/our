function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function spawnEnemy(x){
    enemys.push(new Enemy(x,25,enemys.length+0,getRandomArbitrary(0.5,2),1));
}

function doWave(wave){
var blankenemy=new Enemy(0,0,-1);
var x=5;
var enemyCount=waves[wave];

var spacing = (400-(blankenemy.width*enemyCount))/enemyCount;

while (x<width-25){
    spawnEnemy(x);
    x=x+blankenemy.width+spacing;
}

}


cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  player.bulletCoolDownLength=0;
  player.health=30;
});

function die(){
    swal({
  title: "You died :(",
  text: "You died.",
  type: "warning",
  showCancelButton: false,
  confirmButtonColor: "#08CE08",
  confirmButtonText: "Restart",
  closeOnConfirm: true
},
function(){
  location.reload();
});
}


$(document).keyup(function(e) {
     if (e.keyCode == 27 && game == undefined) { // escape key maps to keycode `27`
        start();
    }
});

function start(){
    swal({
        title: "Starting Game!",
        text: "Click to start game",
        showCancelButton: false,
        confirmButtonColor: "#08CE08",
        confirmButtonText: "START!",
        closeOnConfirm: true
        },
        function(){
            init();
        }
    );
}

function colCheck(a,b,c){var d=a.x+a.width/2-(b.x+b.width/2),e=a.y+a.height/2-(b.y+b.height/2),f=a.width/2+b.width/2,g=a.height/2+b.height/2,h=null;if(Math.abs(d)<f&&Math.abs(e)<g){var i=f-Math.abs(d),j=g-Math.abs(e);i>=j?e>0?(h="t",c&&(a.y+=j)):(h="b",c&&(a.y-=j)):d>0?(h="l",c&&(a.x+=i)):(h="r",c&&(a.x-=i))}return h}

function reindexArray(a){var b=[];for(var c in a)b.push(a[c]);return b}