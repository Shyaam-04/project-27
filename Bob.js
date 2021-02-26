class Bob{
    constructor(x,y){
        var options = {
            isStatic:false,
            friction:0,
            density:5
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }
    display(){
       push()
       ellipseMode(RADIUS);
       fill("pink");
       ellipse(this.body.position.x,this.body.position.y,25,25);
       pop();
    }
}