import { Character } from './character'
export class GameScene extends Phaser.Scene {
  //Phaser.Physics.Arcade.Sprite for sprites
  tileset!: Phaser.Tilemaps.Tileset;
  map!: Phaser.Tilemaps.Tilemap;
  groundLayer!: Phaser.Tilemaps.StaticTilemapLayer;
  wallLayer!: Phaser.Tilemaps.StaticTilemapLayer;
  knight!: Phaser.Physics.Arcade.Sprite;

  /* 
    knight_f_idle_anim 128 68 16 28 4
    knight_f_run_anim 192 68 16 28 4
    knight_f_hit_anim 256 68 16 28 1

    knight_m_idle_anim 128 100 16 28 4
    knight_m_run_anim 192 100 16 28 4
    knight_m_hit_anim 256 100 16 28 1

  */

  preload () : void {
    this.load.tilemapTiledJSON('starterFloor', '../dist/assets/maps/floor1.json');
    this.load.image('dungeonTileset', '../dist/assets/maps/tilesets/dungeonTileSet.png');
    this.load.spritesheet({
      key: 'knight',
      url: '../dist/assets/maps/tilesets/dungeonTileSet.png',
      frameConfig: {
        frameWidth: 16,
        frameHeight: 16,
        startFrame: 128,
        endFrame: 192
      }
    })
  }

  create () : void {
    this.map = this.add.tilemap('starterFloor');
    this.tileset = this.map.addTilesetImage('0x72_DungeonTilesetII_v1.1','dungeonTileset')
    this.groundLayer = this.map.createStaticLayer('Ground', this.tileset);
    this.wallLayer = this.map.createStaticLayer('Walls', this.tileset);
    this.wallLayer.setCollisionByProperty({ collides: true });
    /**
     * The two points below are for spawn and entrance to the next scene
     */
    const spawnPoint = this.map.findObject('SpawnPoint', (obj) => {
      if (obj.name === "SpawnPoint") {
        return obj.name
      } else {
        throw new Error('No spawn object found');
      }
    })
    
    const entrancePoint = this.map.findObject('Entrance', (obj) => {
     if (obj.name === "EntrancePoint") {
       return obj.name
     } else {
       throw new Error('No entrance object found');
     }
    })
    console.log(spawnPoint, entrancePoint)

    

  }

  update () : void {

  }


}
