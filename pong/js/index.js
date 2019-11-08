let preload = new Phaser.Scene('preload');
let menu = new Phaser.Scene('menu');
let level1 = new Phaser.Scene('level1');
let level2 = new Phaser.Scene('level2');
let worldX = 700;
let worldY = 500;


let config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 700,
    height: 500,
    pixelArt: true,
    scale: {
    // Ensure the canvas is resized to fit the parent div's dimensions
    //mode: Phaser.Scale.RESIZE,
    // Center the game canvas both horizontally and vertically within the parent
    //autoCenter: Phaser.Scale.CENTER_BOTH
  },
    scene: [ preload, menu, level1, level2 ],
      physics: {
    default: 'arcade',
    arcade: {
      gravity: false
    },
  }
    
};

let game = new Phaser.Game(config);
