function healthBar(x,y,w,h) {
    this.x=x;
    this.y=y;
    this.height=h;
    this.width=w;
    this.lineWidth=5;
    this.color="rgba(153,0,0, 0.5)";
    this.textColor="black";
    this.draw=function(){
        ctx.textBaseline = 'middle'; 
        ctx.textAlign = 'center'; 
        var old_color=ctx.fillStyle;
        var old_lineWidth=ctx.lineWidth;
        ctx.fillStyle=this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.strokeRect(this.x,this.y,this.width+this.lineWidth,this.height);
        ctx.fillRect(this.x+this.lineWidth/2,this.y+this.lineWidth/2,(player.health/player.maxHealth)*this.width,this.height-this.lineWidth);
        ctx.fillStyle=this.textColor;
        ctx.fillText(player.health+"/"+player.maxHealth, this.width/2, this.height/2);
        ctx.fillStyle=old_color;
        ctx.fillStyle=old_lineWidth;
    }
}