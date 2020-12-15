class balls {
    constructor(x) {
        
        var options= {
            isStatic:true


        }
     

      this.body= Bodies.circle(x, 300, 20, options)
      World.add(world, this.body)
    }

    


    display() {

      fill("pink");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, 15);


    }
}