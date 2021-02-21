class Car {
constructor(x,y){
var option = {
isStatic:true
}
this.body=bodies.rectangle(400,350);
this.image=loadImage("1.jpg");
World.add(world,this.body);
}
display(){
imageMode(CENTER);
image(this.image,500,500,50,50);
}
}