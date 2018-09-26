import * as PIXI from 'pixi.js'

export default class PixiBoot extends PIXI.Application
{
	bunny:PIXI.Sprite;

	constructor()
	{
		super({
			view: <HTMLCanvasElement>document.getElementById('canvas'),
			backgroundColor: 0x6495ed,
			width: 800,
			height: 800
		});

		document.body.appendChild(this.view);

		this.bunny = PIXI.Sprite.fromImage('bunny.png');

		this.bunny.anchor.set(0.5);

		this.bunny.x = this.screen.width / 2;
		this.bunny.y = this.screen.height / 2;

		this.stage.addChild(this.bunny);

		this.ticker.add((deltaTime) => this.update(deltaTime));
	}

	update(deltaTime:number)
	{
		this.bunny.rotation += 0.1 * deltaTime;
	}
}

new PixiBoot();
