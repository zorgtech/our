function Player(x,y) {
    this.x=x;
    this.y=y;
    this.width=25;
    this.height=25;
    this.color="grey";
    this.xm=0;
    this.ym=0;
    this.xMChange=0.2;
    this.yMChange=0.2;
    this.friction=0.3;
    this.maxX=5;
    this.maxY=5;
    this.setZero=1.1;
    this.bulletCoolDown=0;
    this.bulletCoolDownLength=framerate/3;
    this.health=10;
    this.maxHealth=10;
    
    this.damage=function(damage){
        this.health-=damage;
        if (this.health<1){
            healthbar.draw();
            clearInterval(game);
            game=undefined;
            die();
        }
    }
    
    this.action=function(){
        this.checkKeys();
        this.damage(0);
        this.move();
        this.draw();
        if (this.bulletCoolDown>0 && this.bulletCoolDownLength > this.bulletCoolDown){
            this.bulletCoolDown++;
        }
        if (this.bulletCoolDownLength<=this.bulletCoolDown){
            this.bulletCoolDown=0
        }
    }
    
    this.draw=function(){
        var old_color=ctx.fillStyle;
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.fillStyle=old_color;
    }
    
    this.checkKeys=function(){
        if (keys[65] && this.xm>-this.maxX){
            this.xm-=this.xMChange;
        }
        if (keys[68] && this.xm<this.maxX && this.x+this.width<500){
            this.xm+=this.xMChange;
        }
        if (keys[32]&&this.bulletCoolDown==0){
            this.bulletCoolDown++;
            bullets.push(new bullet((this.x+(this.width/2)-new bullet(-1,-1,-1).width/2),this.y,bullets.length,"player",getRandomArbitrary(8,10)));
        }
        if (keys[87] && this.ym>-this.maxY){
            this.ym-=this.yMChange;
        }
        if (keys[83] && this.ym<this.maxY){
            this.ym+=this.yMChange;
        }
    }
    
    this.move=function(){
        if (this.x<0 && this.xm<0.1){
            this.x=0;
        }
        if (this.x+this.width>width && this.xm>0.1){
            this.x=width-this.width;
        }
        if (this.y<0 && this.ym<0.1){
            this.y=0;
        }
        if (this.y+this.height>height && this.ym>0.1){
            this.y=height-this.height;
        }
        this.x+=this.xm;
        if (!keys[65]&&!keys[68]){
            if (this.xm>this.setZero){
                this.xm-=this.friction;
            } else if (this.xm<-this.setZero){
                this.xm+=this.friction
            } else {
                this.xm=0;
            }
        }
        /*
        this.y+=this.ym;
        if (!keys[83]&&!keys[87]){
            if (this.ym>this.setZero){
                this.ym-=this.friction;
            } else if (this.ym<-this.setZero){
                this.ym+=this.friction
            } else {
                this.ym=0;
            }
        }
        */
    }
}