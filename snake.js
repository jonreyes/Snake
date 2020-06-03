function Snake(){
    this.x = 0;
    this.y = 0;
    this.dx = scale;
    this.dy = 0;
    this.total = 0;
    this.tail = [];

    this.draw = () => {
        ctx.fillStyle = 'rgb(0,255,0)';
        for(let i = 0; i < this.tail.length; i++){
          ctx.fillRect(this.tail[i].x,this.tail[i].y,scale,scale);
        }
        ctx.fillRect(this.x,this.y,scale,scale);
    }

    this.eat = (food) => {
      if(this.x === food.x && this.y === food.y){
        this.total++;
        return true;
      }
      return false;
    }

    this.collide = () => {
      for(let i = 0; i < this.tail.length; i++){
        if(this.x === this.tail[i].x && this.y === this.tail[i].y){
            this.total = 0;
            this.tail = [];
            return true;
        }
      }
    }

    this.boundaryCheck = () => {
        if(this.x < 0){
            this.x = canvas.width-scale;
        }

        if(this.x >= width){
            this.x = 0;
        }
        
        if(this.y < 0){
            this.y = canvas.height-scale;
        }

        if(this.y >= height){
            this.y = 0;
        }
    }

    this.setDirection = (direction) => {
        switch(direction){
            case 'up':
              this.dx = 0;
              this.dy = -1*scale; 
              break;
            case 'down':
              this.dx = 0;
              this.dy = scale; 
              break;
            case 'left':
              this.dx = -1*scale; 
              this.dy = 0;
              break;
            case 'right':
              this.dx = scale; 
              this.dy = 0;
              break;
            default:
              break;
          }
    }

    this.update = (direction) => {
      for(let i = 0; i < this.tail.length - 1; i++){
        this.tail[i] = this.tail[i+1];
      }
      this.tail[this.total-1] = {x:this.x,y:this.y};

      this.setDirection(direction);

      this.x+=this.dx;
      this.y+=this.dy;

      this.boundaryCheck();
    }
}