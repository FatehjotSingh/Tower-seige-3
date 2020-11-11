class Hex{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.25
      }
      this.body = Bodies.rectangle(x, y,40,40, options);
      this.width=40
      this.height=40
      this.image=loadImage("Hexastrike.png")
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y)     
      fill("yellow")
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
      pop();
    }
}
