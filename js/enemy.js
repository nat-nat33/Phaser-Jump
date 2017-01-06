((Phaser, Game, CFG) =>{
  if(Game === undefined){
    Game = window.Game = ();
  }

  const SCALE = 1;

  Game.Enemy = class {
    constructor (game, x, y, spriteLabel){
      this.game = game;
      this.sprite = this.game.add.sprite(x, CFG.GAME_HEIGHT - y, CFG.ASSETS.GFX, spriteLabel);
      this.sprite.scale.set(SCALE);
      this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

      // allows passing through platforms
      // #TODO this will be bad for checking other objects though
      this.sprite.body.checkCollision.up =
      this.sprite.body.checkCollision.left =
      this.sprite.body.checkCollision.right = false;

      this.sprite.update = this.update.bind(this);
    }
  }
})(window.Phaser, window.Game, window.Game.Configuration);