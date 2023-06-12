import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


Loader.shared.add({url: "./pngwing.com.png", name: "redCar"});
Loader.shared.add({url: "./clampy.png", name: "Clampy"});

Loader.shared.onComplete.add(()=>{
	const clampy: Sprite = Sprite.from("Clampy");
	const car: Sprite = Sprite.from("redCar")

	car.anchor.set(0);
	car.x= app.screen.bottom/2;
	car.y=app.screen.width/2;
	car.x= 5;
	car.y= 5;
	app.stage.addChild(car); console.log("aca llega el auto")
	
	clampy.anchor.set(0);
	clampy.x = app.screen.width / 8;
	clampy.y = app.screen.height / 8;
	clampy.x = 0;
	clampy.y = 0;
	app.stage.addChild(clampy); 
	console.log("aca llega")
});
Loader.shared.load();
