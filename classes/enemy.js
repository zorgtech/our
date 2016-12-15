function Enemy(x,y,id,speed,health,movePattern) {
    this.x=x;
    this.y=y;
    this.id=id;
    this.width=25;
    this.height=25;
    this.color="blue";
    this.textColor="black";
    this.speed=speed;
    this.downAnimation={active:false,distance:0};
    this.moveData={};
    this.lowest=100;
    this.health=health;
    this.bulletSpeed=getRandomArbitrary(5,8);
    this.bDamage=2;
    this.move=movePattern;
    
    this.checkWall = function(){
        if (this.x+this.width==width||this.x+this.width>=width){
            return "right";
        }
        if (this.x==0||this.x<=0){
            return "left";
        }
        if (this.y==0||this.y<=0){
            return "up";
        }
        if (this.y==height||this.y<=height){
            return "down";
        }
        return false;
    }
    
    this.shoot=function(){
        if (getRandomInt(0,(this.speed*15)-kills).clamp(0,10000000000)==0){
            if (player.y < this.y){
                var bSpeed = this.bulletSpeed;
            } else {
                var bSpeed = -this.bulletSpeed;
            }
            bullets.push(new bullet((this.x+(this.width/2)-new bullet(-1,-1,-1).width/2),this.y,bullets.length,"enemy",bSpeed,this.bDamage));
        }
    }
    
    this.delete = function(){
        delete window["enemys"][this.id];
        kills++;
    }
    
    this.draw=function(){
        var old_color=ctx.fillStyle;
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.fillStyle=old_color;
    }
}