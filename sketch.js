var balloon,background


function setup() {
  database=firebase.database()

  createCanvas(500,500);
                         
  balloon = createSprite(250,250,10,10);
   //refering to the database
   var balloonposition=database.ref('balloon/position')
   //on is a pre-defined function,"value" is a label 
   balloonposition.on("value",readPosition)
}
function draw(){
  background("white");
  if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
  }
  drawSprites();
}

function readPosition(data){
//val is a pre-defined function to refer to the value of database 
  position=data.val()
balloon.x=position.x
balloon.y=position.y
}
function writePosition(x,y){
database.ref('balloon/position').set({
  //to set the position
  'x':position.x+x,
  'y':position.y+y
})

}