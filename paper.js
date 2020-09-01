class Paper extends BaseClass{
    constructor(x,y){
        super(200,350,50,50);
       
        this.image=loadImage("sprites/paper.png");
    }
    display(){
        image(this.image, 100, 320, this.width, this.height);
        super.display();
    }
   
}
