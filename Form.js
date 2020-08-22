class Form{
constructor(){
    this.greeting=createElement("h2");
    this.date=createElement("h4");
    this.dateinput=createInput("date");
    this.greeting2=createElement("h3");
    this.greeting2input=createElement("textarea");
    
    this.greeting3=createElement("h3");
    this.greeting3input=createElement("textarea");
}
hide(){
this.greeting.hide();
this.date.hide();
this.dateinput.hide();
this.greeting2.hide();
this.greeting2input.hide();
this.greeting3.hide();
this.greeting3input.hide();
}
display(){
    this.greeting.html("Hello");
    this.greeting.position(displayWidth/2,displayHeight/2-400);

    this.date.html("Date-  ")
    this.date.position(displayWidth/2-640,displayHeight/4-120);
    this.dateinput.position(displayWidth/2-605,displayHeight/4-100);

    this.greeting2.html("How are you feeling");
    this.greeting2.position(displayWidth/2-640,displayHeight/4-10);
    this.greeting2input.position(displayWidth/2-640,displayHeight/4+30);

    this.greeting3.html("What all did you do today?");
    this.greeting3.position(displayWidth/2-640,displayHeight/4+320);
    this.greeting3input.position(displayWidth/2-640,displayHeight/4+360);
}
}