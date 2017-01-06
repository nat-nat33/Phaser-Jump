(( Phaser, Game, CFG ) => {
    Game.hero = null;
    Game.platformsGroup = null;
    Game.cursors = null;
  const preload = _ => {
    game.load.atlasJSONHash(
      CFG.ASSETS.GFX,
      CFG.ASSETS.ATLAS_PNG_PATH,
      CFG.ASSETS.ATLAS_JSON_PATH
    );
  };

  const create = _ => {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = CFG.GRAVITY;
    game.stage.backgroundColor = CFG.BG_COLOR;

    Game.cursors = game.input.keyboard.createCursorKeys();

    Game.platformsGroup = game.add.group();
    Game.LevelDesigner.load(game, 1);

    Game.hero = new Game.Hero(game, 500, CFG.GAME_HEIGHT - 200);
    game.camera.follow(hero.sprite, null, CFG.CAMERA_LERP, CFG.CAMERA_LERP);
  };

  const update = _ => {
  };

  const game = new Phaser.Game(CFG.STAGE_WIDTH, CFG.STAGE_HEIGHT, Phaser.AUTO, CFG.GAME_CONTAINER_ID, { preload, create, update });

})(window.Phaser, window.Game, window.Game.Configuration);
