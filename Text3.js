class Text3{
    constructor(){
        this.greeting=createElement("h2");
        this.greeting2=createElement("h2");
    }
    hide(){
        this.greeting.hide();
        this.greeting2.hide();
    }
    display(){
        this.greeting.html("Click anywhere to start the music")
       this.greeting.position(displayWidth/2-100,displayHeight/2+300);
     this.greeting2.html("Do this till the music stop");
this.greeting2.position(displayWidth/2-100,displayHeight/2-350);
    }
}