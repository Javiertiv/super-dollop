import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});
window.addEventListener("resize",()=>{
	const scaleX =  window.innerWidth/  app.screen.width;
	const scaleY =  window.innerHeight/ app.screen.height;
	const scale = Math.min(scaleX,scaleY); //elije entre la menor de las 2 alturas
	
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);
	
	
	//para que el recuadro quede centrado en la pantalla

	const marginOri =Math.floor ((window.innerWidth - gameWidth) / 2);
	const margVert = Math.floor((window.innerHeight - gameHeight) / 2); 

	app.view.style.width = gameWidth + "px";// la pantalla quede a escala
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginOri + "px";
	app.view.style.marginRight = margVert +"px";

	app.view.style.marginTop = margVert +"px";
	app.view.style.marginBottom = margVert + "px";

})
window.dispatchEvent( new Event ("resize"))

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
	app.stage.addChild(car); 
	
	clampy.anchor.set(0);
	clampy.x = app.screen.width / 8;
	clampy.y = app.screen.height / 8;
	clampy.x = 0;
	clampy.y = 0;
	app.stage.addChild(clampy); 
	
});
Loader.shared.load();
