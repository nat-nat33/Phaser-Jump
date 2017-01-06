((Phaser, Game, CFG) => {
  if(Game === undefined){
    Game = window.Game = {};
  }
  Game.Hereo = class {
    constructor() {


    };
  };
})(window.phaser, window.Game, window.Game.Configuration);