import { Character } from './character'
export class GameScene extends Phaser.Scene {
  //Phaser.Physics.Arcade.Sprite for sprites
  tileset!: Phaser.Tilemaps.Tileset;
  map!: Phaser.Tilemaps.Tilemap;
  groundLayer!: Phaser.Tilemaps.StaticTilemapLayer;
  wallLayer!: Phaser.Tilemaps.StaticTilemapLayer;
  knight!: Phaser.GameObjects.Sprite;
  

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
      url: '../dist/assets/sprites/Knight.png',
      frameConfig: {
        frameWidth: 24,
        frameHeight: 32
      }
    });

    /**
     * this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('link', { start: 1, end: 6 }),
      frameRate: 10,
      repeat: -1
    });

     */
  }

  create () : void {
    this.map = this.add.tilemap('starterFloor');
    this.tileset = this.map.addTilesetImage('0x72_DungeonTilesetII_v1.1','dungeonTileset')
    this.groundLayer = this.map.createStaticLayer('Ground', this.tileset);
    this.wallLayer = this.map.createStaticLayer('Walls', this.tileset);
    this.wallLayer.setCollisionByProperty({ collides: true });
    /**
     * The two points below are for spawn and entrance coords
     */
    const spawnPoint = this.findObjCoords('SpawnPoint');
    const entrancePoint = this.findObjCoords('Entrance');
    this.knight = this.add.sprite(spawnPoint.x, spawnPoint.y, 'knight');
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNames('knight', {start: 2, end: 5}),
      frameRate: 10,
      repeat: -1
    })
  }

  update () : void {
    const keys = this.input.keyboard
    keys.on('keydown-A', () => {
      console.log('a')
      this.knight.anims.play('left', true)
    })
  }

  private findObjCoords = (name: string): any => {
    return this.map.findObject(name, (obj) => {
      if (obj.name === name) {
        return obj
      } else {
        throw new Error(`No ${name} object found!`)
      }
    })
  }
}
