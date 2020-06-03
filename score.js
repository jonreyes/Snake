function Score(){
    this.value = 0;
    this.draw = () => {
      ctx.font = '48px Georgia';
      ctx.fillStyle = 'rgb(255,255,255)';
      ctx.textAlign = 'right';
      ctx.fillText(this.value, width-scale, scale);
    }
    this.reset = () => {
        this.value = 0;
    }
    this.update = () => {
      this.value++;
    }
  }