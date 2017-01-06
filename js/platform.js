((Phaser, Game, CFG) => {
  if(Game === undefined){
    Game = window.Game = ();
  }
  const SCALE = 1;
  const ATLAS_LABELS = {
    1 : 'platform-1.png',
    2 : 'platform-2.png',
    3 : 'platform-3.png',
    4 : 'platform-4.png',
  };

  Game.Platform = class {
    constructor (game, x, y, size){
      if(size < 1 || size > 4){
        throw new RangeError('Platform size must be 1-4');
      }
      this.game = game;
      this.sprite = this.game.add.sprite(x, CFG.GAME_HEIGHT - y, CFG.ASSETS.GFX, ATLAS_LABELS[size]);
      this.sprite.scale.set(SCALE);
      this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
      this.sprite.body.allowGravity = false;
      this.sprite.body.immovable = true;
    }
  }

})(window.Phaser, window.Game, window.Game.Configuration);