class Slingshot {
    constructor(bodyA, pointB) {
        var slingshotOptions = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 20
        }

        this.slingshot = Constraint.create(slingshotOptions);
        World.add(world, this.slingshot);
    }

    fly() {
        this.slingshot.bodyA = null;
    }

    display() {
        if (this.slingshot.bodyA) {
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}