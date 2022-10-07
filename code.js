var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["37fc56c4-37e8-40c4-ad71-dbfcb0ddf02c","5f07ccd2-d2f6-47d6-b073-16b6e2bff227"],"propsByKey":{"37fc56c4-37e8-40c4-ad71-dbfcb0ddf02c":{"name":"mouse_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JiNH1fnncYd5VrE5Js_QJMmE4Vm1Lt2p/category_animals/mouse.png","frameSize":{"x":61,"y":37},"frameCount":2,"looping":true,"frameDelay":2,"version":"JiNH1fnncYd5VrE5Js_QJMmE4Vm1Lt2p","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":37},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JiNH1fnncYd5VrE5Js_QJMmE4Vm1Lt2p/category_animals/mouse.png"},"5f07ccd2-d2f6-47d6-b073-16b6e2bff227":{"name":"cheese_1","sourceUrl":"assets/api/v1/animation-library/gamelab/BnRZRFpznzKZ.5IPc97zl99rHJyU2geK/category_food/cheese.png","frameSize":{"x":379,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"BnRZRFpznzKZ.5IPc97zl99rHJyU2geK","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":379,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BnRZRFpznzKZ.5IPc97zl99rHJyU2geK/category_food/cheese.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criando raquete e bola
var placar = 0;
var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(150, 250, 20, 20);
ball.setAnimation("mouse_1");
GameState = "server";

//primeira linha de caixas
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
box1.setAnimation("cheese_1");
box1.scale = 0.1;
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
box2.setAnimation("cheese_1");
box2.scale = 0.1;
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
box3.setAnimation("cheese_1");
box3.scale = 0.1;
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
box4.setAnimation("cheese_1");
box4.scale = 0.1;
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
box5.setAnimation("cheese_1");
box5.scale = 0.1;
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
box6.setAnimation("cheese_1");
box6.scale = 0.1;
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
box7.setAnimation("cheese_1");
box7.scale = 0.1;
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
box8.setAnimation("cheese_1");
box8.scale = 0.1;

//segunda linha de caixas
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
box9.setAnimation("cheese_1");
box9.scale = 0.1;
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
box10.setAnimation("cheese_1");
box10.scale = 0.1;
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
box11.setAnimation("cheese_1");
box11.scale = 0.1;
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
box12.setAnimation("cheese_1");
box12.scale = 0.1;
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
box13.setAnimation("cheese_1");
box13.scale = 0.1;
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
box14.setAnimation("cheese_1");
box14.scale = 0.1;
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
box15.setAnimation("cheese_1");
box15.scale = 0.1;
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
box16.setAnimation("cheese_1");
box16.scale = 0.1;

//placar e box
function draw() {
  background("white");
  textSize(20);
  fill("blue");
  text("placar"+ placar, 300, 35);
  if (ball.isTouching(box1)) {
    box1.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box2)) {
    box2.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box3)) {
    box3.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box4)) {
    box4.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box5)) {
    box5.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box6)) {
    box6.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box7)) {
    box7.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box8)) {
    box8.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box9)) {
    box9.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box10)) {
    box10.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box11)) {
    box11.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box12)) {
    box12.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box13)) {
    box13.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box14)) {
    box14.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box15)) {
    box15.destroy();
    placar = placar+1;
  }
  if (ball.isTouching(box16)) {
    box16.destroy();
    placar = placar+1;
  }
  
  //mover a bola ao pressionar a tecla enter
  if (GameState=="server") {
    text("Pressione Enter", 40, 280);
    if(keyDown("enter")){
      ball.velocityX = 3;
      ball.velocityY = 4;
      GameState = "play";
    }
  }
  if (placar==16) {
    text("end game", 150, 300);
    fill("red");
  }
  
  //fazer a bola rebater na raquete e em três lados da tela
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

  //mover a raquete com o mouse ao longo do eixo x
  paddle.x=World.mouseX;

  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
