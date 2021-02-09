class box{
    constructor(x, y, w, h) {
        var o1 = {
            restitution:1
        }
        this.body =  mb.rectangle(x, y, w, h, o1);
        this.width = w;
        this.height = h;
        mw.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        //push();
       translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
        //pop();
    }
}