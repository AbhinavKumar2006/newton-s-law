class Bob{
    constructor(x,y){
        var opt={
            isStatic:true,
            restitution:0.1,
            friction:0.2,
            densty:30,
        }
        this.body = Bodies.circle(x,y,50,opt);
        this.radius = 50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        strokeWeight(2);
        stroke("black");
        fill("green");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
    }
}