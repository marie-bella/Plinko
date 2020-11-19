class Particle {
    constructor(x, y, r){
      var options={
          restitution:0.4
      }

      this.r=r;
      this.body = Bodies.circle(x, y, this.r, options);
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      World.add(World, this.body);
    }
    display(){

       var pos = this.body.position;
       var angle = this.body.angle;

       if(frameCount%90===0){
         particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
       }

       push();
       translate(pos.x, pos.y);
       rotate(angle);
       noStroke();
       fill(this.color);
       ellipseMode(RADIUS);
       ellipse(0, 0, this.r, this.r);
       pop();

    }
};