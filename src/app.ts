import "phaser";
import {GameScene} from './gameScene';
const gameConfig: object = {
  title: "Tower Defender",
  width: 1280,
  height: 960,
  parent: "game",
  backgroundColor: "#18216D",
  scene: [GameScene],
  plugins: {},
  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  }
};

export class DungeonCrawler extends Phaser.Game {
  constructor(config: object) {
    super(gameConfig);

  }
}
window.onload = () => {
  var game = new DungeonCrawler(gameConfig);
};

