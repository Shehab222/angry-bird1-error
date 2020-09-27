class ground{
    constructor(x,y,width,height){
    var groundoptions={
        isStatic:true
    }
    this.height=height;
    this.width=width;
    this.body=Bodies.rectangle(x,y,width,height,groundoptions)
    World.add(world,this.body)
    }
display(){
    var pos=this.body.position;
    rectMode(CENTER)
    fill("brown")
    rect(pos.x,pos.y,this.width,this.height)
}

}
