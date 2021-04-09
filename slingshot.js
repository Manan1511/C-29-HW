class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.6,
            length: 10
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        fill("aqua");
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            
            stroke(48,22,8);
            if(pointA.x<210){
                strokeWeight(10);
                line(pointA.x-25, pointA.y, pointB.x, pointB.y);
                //image(polygonImg, this.slingshot.bodyA.position.x-25,pointA.y,15,30);
            }
            else{
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x, pointB.y);
                line(pointA.x+25,pointA.y, pointB.x-25, pointB.y); 
                //image(this.slingshot,this.slingshot.bodyA.position.x+25,pointA.y,15,30); 
            }
        }
    }
    
}