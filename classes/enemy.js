function Enemy(x,y,id,speed,health) {
    this.x=x;
    this.y=y;
    this.id=id;
    this.width=25;
    this.height=25;
    this.color="blue";
    this.textColor="black";
    this.speed=speed;
    this.downAnimation={active:false,distance:0};
    this.lowest=100;
    this.health=health;
    this.bulletSpeed=getRandomArbitrary(5,8);
    this.bDamage=2;
    
    this.checkWall = function(){
        if (this.x+this.width==width||this.x+this.width>=width){
            this.downAnimation.active=true;
            //this.y+=this.width+(this.width/5);
            this.speed*=-1;
            return true;
        }
        if (this.x==0||this.x<=0){
            this.downAnimation.active=true;
            this.speed*=-1;
            return true;
        }
        return false;
    }
    
    this.shoot=function(){
        if (getRandomInt(0,reindexArray(enemys).length*5)==0){
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
    }
    
    this.move = function(){
        if (!this.downAnimation.active){
            this.checkWall();
            this.x+=this.speed;
        } else {
            if (this.downAnimation.distance < this.width+(this.width/5)){
                this.y+=Math.abs(this.speed);
                this.downAnimation.distance+=Math.abs(this.speed);
            } else {
                this.downAnimation.active=false;
                this.downAnimation.distance=0;
            }
        }
    }
    
    this.draw=function(){
        var old_color=ctx.fillStyle;
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.fillStyle=old_color;
    }
}