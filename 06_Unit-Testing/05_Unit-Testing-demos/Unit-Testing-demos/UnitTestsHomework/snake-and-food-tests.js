module("Snake.init");

test("When snake is initialized, should set the correct values", function() {
  var position = {
    x: 150,
    y: 150
  };
  var speed = 15;
  var direction = 0;
  var snake = new snakeGame.Snake(position, speed, direction);

  equal(position, snake.position, "Position is set");
  equal(speed, snake.speed, "Speed is set");
  equal(direction, snake.direction, "Direction is set");
});

test("When snake is initialized, should contain 5 SnakePieces", function() {
  var position = {
    x: 150,
    y: 150
  };
  var speed = 15;
  var direction = 0;
  var snake = new snakeGame.Snake(position, speed, direction);

  ok(snake.pieces,"SnakePieces are created");
  equal(snake.pieces.length, 5,"Five SnakePieces are created");
  ok(snake.head, "HeadSnakePiece is created");
});


module("Snake.move");
test("When snake moves  the next direction of piece number i, should be the previoud direction of piece number i-1", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);
  var firstPiecePreviousDirection = snake.pieces[0].direction;
  snake.move();
  var secondPieceNewDirection=snake.pieces[1].direction;
  equal(firstPiecePreviousDirection, secondPieceNewDirection);
});

test("When snake moves it's head moves too.", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);
  snake.move();
  //this.position.x += directions[this.direction].x * this.speed;
  var newXPosition=150-15;
  equal(snake.head.position.x, newXPosition,"Head moves in appropriate way");
});

test("When snake moves it's position should the position of it's head", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);
  snake.move();
  equal(snake.position, snake.head.position);
});

module("Snake.changeDirection");
test("When snake changes direction, the direction of it's head should be changed in the new direction", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);
  var newDirection=1;
  snake.changeDirection(newDirection);
  equal(snake.head.direction, newDirection);
});


// ===============================================
// changeDirection: function(newDirection) {
//       this.head.changeDirection(newDirection);
//       this.move();
//     },
//================================================
// this.move is tested in moving game objects


module("Snake.grow");
test("When snake has 15 pieces and it grows the size of snake should be with  16", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);
  var oldSize = snake.size;
  snake.grow();
  var actual=snake.size;
  var expected = oldSize + 1;
  equal(actual, expected, "Snake size is increased by 1");
});

module("Snake.Consume");
test("When object is Food, should grow", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);
  var size = snake.size;
  snake.consume(new snakeGame.Food());
  var actual = snake.size;
  var expected = size + 1;
  equal(actual, expected);
});

test("When object is SnakePiece, should die", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);

  var isDead = false;

  snake.addDieHandler(function() {
    isDead = true;
  });

  snake.consume(new snakeGame.SnakePiece());
  ok(isDead, "The snake is dead");
});

test("When object is Obstacle, should die", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);

  var isDead = false;

  snake.addDieHandler(function() {
    isDead = true;
  });

  snake.consume(new snakeGame.Obstacle());
  ok(isDead, "The snake is dead");
});


module("Snake.addDieHandler");
test("When add dieHandler the their size should increase by 1", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);

  if (snake.dieHandlers){
    var dieHandlersBefore = snake.dieHandlers.length;
  }
  else{
    dieHandlersBefore=0;
  }
  
  snake.addDieHandler("some handler");
  snake.addDieHandler("some other handler");
  var dieHandlersAfterAddedTwoMore = snake.dieHandlers.length;
  equal(dieHandlersAfterAddedTwoMore, dieHandlersBefore+2);
});

module("Snake.die");
test("When snake dies handlers == 0", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);
  //var someFunction=9;

  snake.addDieHandler(function(){});
  snake.addDieHandler(function(){});
  var handlers = snake.dieHandlers.length;
  snake.die();
  equal(snake.dieHandlers.length,handlers-2);

});
// var Food = GameObject.extend({
//     init: function(position, size) {
//       this._super(position, size, foodFillColor, foodStrokeColor);
//     },
//     changePosition: function(newPosition) {
//       this.position = {
//         x: newPosition.x,
//         y: newPosition.y
//       };
//     }
//   });

module("Food");
test("When food is initialized, should set the correct values", function() {
  var position = {
    x: 150,
    y: 150
  };
  var size = 15;
  var food = new snakeGame.Food(position, size);

  equal(position, food.position, "Position is set");
  equal(size, food.size, "Size is set");
});

test("Change food position from x=100,y=150, to x=150, y=150.", function() {
  var startPosition = {
    x: 100,
    y: 150
  };
  var endPosition = {
    x: 150,
    y: 150
  };
  var size = 15;
  var food = new snakeGame.Food(startPosition, size);
  food.changePosition(endPosition)
  equal(endPosition.x, food.position.x, "X position is correct!");
  equal(endPosition.y, food.position.y, "Y position is correct!");
  
});