const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world,brain_img,brain,bubble_img,bubble1,bubble_img,bubble,buuble2,bubble2_img,bubble1_img,bubble3_img;
var bubble3,bubble4_img,bubble4,bubble5_img,bubble5,button1,page2,text1,button2,button3,button4,button5,bubble5;
var bubble6_img,button6,button7,button8,white,back;
let mysound,text2,text3,text4,text5,text6,text7,form,background_img,button9,button10,button11,button12,button13;
let mysound1;
var button14,button15,button16,text8,p1,p_img,alunom,alunom2,text9,bg1,text10,text21,button17,d,d1,text100;
var text11,text12,text13,text14,text15,text16,text17,text18,text19,text20,pinkb,pink1,think1,think2,brain1,button20,button21,button23,button99;
function preload(){
  p_img=loadImage("piano.png")
    d=loadImage("dc.png");
    think1=loadImage("think.jpg");
    pinkb=loadImage("bg2.jpg")
   alunom=loadImage("alom.jpg");
   

soundFormats("mp3","ogg");
mysound=loadSound("music2.mp3");
soundFormats("mp3","ogg");
mysound1=loadSound("music.mp3");
}
function setup(){
    engine = Engine.create();
    world = engine.world;
     createCanvas(displayWidth,displayHeight)
     button1=createButton("Next");
    d1=createSprite(displayWidth/2,displayHeight/2);
    d1.addImage(d)
    text1=createElement("h2");
    //text2=createElement("h2");
    text3=createElement("h2");
    text4=createElement("h2");
    text5=createElement("h2");
    text6=createElement("h2");
    text7=createElement("h2");
    text8=createElement("h2");
    text9=createElement("h2");
    text10=createElement("h2");
    text11=createElement("h2");
    text12=createElement("h2");
    text13=createElement("h2");
    text14=createElement("h2");
    text15=createElement("h2");
    text16=createElement("h2");
    text17=createElement("h2");
    text18=createElement("h2");
    text19=createElement("h2");
    text20=createElement("h2");
    text21=createElement("h2");
   this.Visibility=255;
}
function draw(){
    Engine.update(engine);
    background(255);
    imageMode(CENTER) ;
Bubble();
   drawSprites()
}
function Bubble() {  
button1.position(displayWidth/2-10,displayHeight/2+450);
button1.mousePressed(()=>{
    button1.hide();
    background("white")
    page1();
    console.log(page1);   
})
}
//after next
function page1(){
    pink1=createSprite(displayWidth/2,displayHeight/2);
   pink1.addImage(pinkb);
   pink1.scale=4;
    button2=createButton("Read");
    button3=createButton("Listen and meditate");
    button4=createButton("Write");
    button8=createButton("Your Planner");
//read
button2.position(displayWidth/2-300,displayHeight/3);
button2.size(displayWidth/2,100)
//listen
button3.position(displayWidth/2-300,displayHeight/6);
button3.size(displayWidth/2,100)
//write
button4.position(displayWidth/2-300,displayHeight/2);
button4.size(displayWidth/2,100)
//what to dozxdr
button8.position(displayWidth/2-300,displayHeight/1.5);
button8.size(displayWidth/2,100)
    console.log("hello");
    //read
    button2.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button8.hide();
        page6();
    })
    //listen
    button3.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button8.hide();
        page2();
    });
    //write
    button4.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button8.hide();
        page7();
    })
    //what to do
    button8.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button8.hide();
        page5();
       })
    }
    function page2(){
        background("#fae");
        button6=createButton("Soothing Relaxation");
    button7=createButton("piano");
       //soothing relaxation inside lisen
        button6.position(displayWidth/2-350,displayHeight/2-120);
        button6.size(displayWidth/2,100);
//piano inside listen
        button7.position(displayWidth/2-350,displayHeight/2-10);
        button7.size(displayWidth/2,100);
        button13=createButton("Back");
        button13.position(displayWidth/4+1000,displayHeight/4+600);
        button13.mousePressed(()=>{
            button13.hide();
            button6.hide();
            button7.hide();
           
            text2.hide();
            text3.hide();
            text9.hide();
            page1();
        })
        //hiding sr
       button6.mousePressed(()=>{
           button6.hide();
           button7.hide();
           page3();
       })
       //hiding piano
       button7.mousePressed(()=>{
        button6.hide();
        button7.hide();
        page4();
       })
    }
    //listen==soothing relaxation
    function page3(){
        let cnv=createCanvas(displayWidth,displayHeight)
       cnv.mousePressed(canvasPressed);
      text2=new Text2();
      text2.display();

alunom2=createSprite(displayWidth/2,displayHeight/2);
alunom2.addImage(alunom);
alunom2.scale=1;

    }
    //music for soothing relaxataion
    function canvasPressed(){
        mysound.play();
    }
    //for piano
   function page4(){
    button99=createButton("Back");
    button99.position(displayWidth/4+1000,displayHeight/4+600)
       let cnv1=createCanvas(displayWidth,displayHeight);
      cnv1.mousePressed(canvasPressed2);
      
       p1=createSprite(displayWidth/2,displayHeight/2);
       p1.addImage(p_img);
       text9=new Text3();
       text9.display();
       button99.mousePressed(()=>{
           button99.hide();
           text9.hide();
           button13.hide();
           page1();

       })
    }
    //for piano
    function canvasPressed2(){
        mysound1.play();
    }
    //for what to do
    function page5(){
       button20=createButton("Week 1");
       button20.position(displayWidth/4,displayHeight/4);
       button20.size(displayWidth/10,displayHeight/10);
    button21=createButton("Week 2");
    button21.position(displayWidth/3-5,displayHeight/3+150);
    button21.size(displayWidth/10,displayHeight/10);
    button23=createButton("Week 3")
    button23.position(displayWidth/5,displayHeight/5);
    button23.size(displayWidth/10,displayHeight/10);
    button20.mousePressed(()=>{
        button20.hide();
        button21.hide();
        button23.hide();
        page8();
    })
    button21.mousePressed(()=>{
        button20.hide();
        button21.hide();
        button23.hide();
    })
    button23.mousePressed(()=>{
        button20.hide();
        button21.hide();
        button23.hide();
    })

    }
    //week1
   function page8(){
text100=new Text();
text100.display();
check1=createElement("checkbox")
check1.position(displayWidth/5,displayHeight/5);
   }
    //write
    function page7(){
        form=new Form();
        form.display();
       
     
     button10=createButton("Back");
     button10.position(displayWidth/4+950,displayHeight/4+550);
     button10.mousePressed(()=>{
         button10.hide();
        form.hide();
          page1();
     })
        white.scale=15;
        white.addImage(background_img);

    }
    //read
    function page6(){
        button9=createElement("button");
    button9.value="The Happiness Trap"
button9.position(displayWidth/2,displayHeight/2);
if(button9.onclick=true){
    window.location.href="http://www.goyourownway.org/GOYOUROWNWAY/DOCUMENTS/VETERANS/PENDING/Happiness%20Trap,%20The%20-%20Harris,%20Russ.pdf"
}
    }