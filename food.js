class Food{

    constructor(){
      this.x = Math.random()*width;
      this.x -= this.x%scale;
      this.y = Math.random()*height;
      this.y -= this.y%scale;
    }

    draw() {
      ctx.fillStyle = 'rgb(255,0,0)';
      ctx.fillRect(this.x,this.y,scale,scale);
    }
  }