module("MovingObject.init");
test("Should set correct values",   
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 0, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    equal(movingObject.position, position)
    equal(movingObject.size, 15);
    equal(movingObject.fcolor, fcolor);
    equal(movingObject.scolor, scolor);
    equal(movingObject.speed, speed);
    equal(movingObject.direction, dir);
  });


module("MovingGameObject.move");
test("When direction is 0, decrease x",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 0, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    movingObject.move();
    position.x - speed;
    deepEqual(movingObject.position, position);
  });
test("When  direction is 1, decrease update y",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 1, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    movingObject.move();
    position.y - speed;
    deepEqual(movingObject.position, position);
  });
test("When  direction is 2, increase x",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 2, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    movingObject.move();
    position.x + speed;
    deepEqual(movingObject.position, position);
  });
test("When  direction is 3, should increase x",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 3, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    movingObject.move();
    position.y + speed;
    deepEqual(movingObject.position, position);
  });

module("MovingGameObject.changeDirection");

// start direction 0
test("When direction is 0, and want to change it to 1, the new direction should be 1",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 0, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=1;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, newDirection);
  });
test("When direction is 0, and want to change it to 2, the new direction should be 0",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 0, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=2;
    var oldDirection=movingObject.direction;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, oldDirection);
  });
test("When direction is 0, and want to change it to 3, the new direction should be 3",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 0, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=3;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, newDirection);
  });
test("When direction is 0, and want to change it to 0, the new direction should be 0",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 0, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=0;
    var oldDirection=movingObject.direction;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, oldDirection);
  });

// start direction 1
test("When direction is 1, and want to change it to 0, the new direction should be 0",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 1, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=0;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, newDirection);
  });
test("When direction is 1, and want to change it to 1, the new direction should be 1",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 1, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=1;
    var oldDirection=movingObject.direction;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, oldDirection);
  });
test("When direction is 1, and want to change it to 2, the new direction should be 2",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 1, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=2;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, newDirection);
  });
test("When direction is 1, and want to change it to 3, the new direction should be 1",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 1, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=3;
    var oldDirection=movingObject.direction;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, oldDirection);
  });
// start direction 2
test("When direction is 2, and want to change it to 1, the new direction should be 1",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 2, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=1;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, newDirection);
  });
test("When direction is 2, and want to change it to 2, the new direction should be 2",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 2, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=2;
    var oldDirection=movingObject.direction;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, oldDirection);
  });
test("When direction is 2, and want to change it to 3, the new direction should be 3",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 2, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=3;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, newDirection);
  });
test("When direction is 2, and want to change it to 0, the new direction should be 2",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 2, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=0;
    var oldDirection=movingObject.direction;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, oldDirection);
  });

// start direction 3
test("When direction is 3, and want to change it to 0, the new direction should be 0",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 3, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=0;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, newDirection);
  });
test("When direction is 3, and want to change it to 1, the new direction should be 3",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 3, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=1;
    var oldDirection=movingObject.direction;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, oldDirection);
  });
test("When direction is 3, and want to change it to 2, the new direction should be 2",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 3, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=2;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, newDirection);
  });
test("When direction is 3, and want to change it to 3, the new direction should be 3",
  function(){
   var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 3, fcolor="blue", scolor="red";
    var movingObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    var newDirection=3;
    var oldDirection=movingObject.direction;
    movingObject.changeDirection(newDirection);
    deepEqual(movingObject.direction, oldDirection);
  });
  