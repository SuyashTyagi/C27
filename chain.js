class chain {
constructor (a,b) {

    var options = {
        bodyA:a,
        bodyB:b,
        stiffness:0.04,
        length:20
    }
    this.body=Matter.Constraint.create(options);
    World.add(world,this.body);
    
}
display(){
var wood=this.body.bodyA.position;
var wood2=this.body.bodyB.position;
line(wood.x,wood.y,wood2.x,wood2.y);
    
}





}