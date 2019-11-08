
preload.preload = function ()
{


  this.load.image('ball', 'assets/ball.png');
  this.load.image('paddle', 'assets/paddle.png');
  this.load.image('line', 'assets/line.png');
  this.load.audio('beep', 'assets/beep.ogg');
  this.load.audio('score', 'assets/score.ogg');
  this.load.audio('explode', 'assets/explode.ogg');



},

preload.create = function ()
{
    
    preload.scene.start('menu');
}

