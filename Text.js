class Text{

    constructor(){
        this.greeting=createElement("h2");
        this.greeting2=createElement("h2");
        this.task2=createElement("h2");
    }
    display(){
    this.greeting.html("Read a book for 10 mins ");
    this.greeting.position(displayWidth/5+10,displayHeight/6+100);
    this.greeting2.position(displayWidth/3-5,displayHeight/3+150);
    this.greeting2.html("Listen music 10 mins");
    this.task2.html("Meditate for 10 mins");
    this.task2.position(displayWidth/5,displayHeight/5);
}
}




