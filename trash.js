class Trash extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image=loadImage("sprites/dustbingreen.png");

    }
    display(){
    image(this.image, 1000, 320, this.width, this.height);
    super.display();
}
}