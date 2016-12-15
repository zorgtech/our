function bullet(x,y,id,type,speed,damage) {
    this.x=x;
    this.y=y;
    this.type=type;
    this.width=10;
    this.height=this.width*2;
    this.color="red";
    this.id=id;
    this.speed=speed;
    this.bHit=0;
    this.bHitMax=4;
    this.damage=damage;
    
    this.draw=function(){
        var old_color=ctx.fillStyle;
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.fillStyle=old_color;
    }
    
    this.delete = function(){
        delete window["bullets"][this.id];
    }
    
    this.move=function(){
        this.y-=this.speed;
        if (this.y < 0 || this.y>height){
            this.delete();
        }
    }
    
    this.checkCollision=function(){
        if (this.type=="player"){
            for (e in bullets){
                if (colCheck(bullets[e],this,false)!=null && this != bullets[e]){
                    bullets[e].delete();
                    if (this.bHit==this.bHitMax){
                        this.delete();
                    } else {
                        this.bHit++;
                    }
                
                }
            }
            for (e in enemys){
                if (colCheck(enemys[e],this,false)!=null){
                    this.delete();
                    enemys[e].delete();
                
                }
            }
        } else {
            if (colCheck(player,this,false)!=null){
                    this.delete();
                    player.damage(this.damage);
            }
        }
    }
    
}