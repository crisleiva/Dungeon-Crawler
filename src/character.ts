export class Character extends Phaser.Physics.Arcade.Sprite{
  health: number;
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, spawnX: number, spawnY: number) {
    super (scene, x, y, texture) 
    this.health = 3;
    scene.sys.updateList.add(this);
    scene.sys.displayList.add(this);
    this.setScale(1);
    this.setOrigin(spawnX, spawnY);
    this.setImmovable(true);
  }
}