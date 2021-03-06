function Background(){
    this.color = 'rgb(0,0,0)';
    this.gridlines = () => {
        for(let i = scale; i < height; i+=scale){
          ctx.beginPath();
          ctx.moveTo(0,i)
          ctx.lineTo(width,i);
          ctx.strokeStyle = 'rgb(255,255,255)';
          ctx.stroke();
        }

        for(let j = scale; j < width; j+=scale){
          ctx.beginPath();
          ctx.moveTo(j,0)
          ctx.lineTo(j,height);
          ctx.strokeStyle = 'rgb(255,255,255)';
          ctx.stroke();
        }
    }
    this.draw = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(0,0,width,height);          
    }
}