class Food{
     
    constructor(){
         this.foodStock=null;
         this.lastFed=null;
         
         this.img=loadImage("images/Milk.png");
        

    }
    bedroom(){
        background(bedroomImage,550,500);
    }
    garden(){
        background(gardenImage,550,500);
    }
    washroom(){
        background(washRoomImage,550,500);
    }
    
    
    display(){
         var x=80,y=100;
     imageMode(CENTER);
     image(this.img,620,220,70,70);
     
         
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;

                }
                image(this.img,x,y,50,50);
                x=x+30;
            }
        }
    }


}