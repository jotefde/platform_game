(function()
{
	function App()
	{
		this.wrap;
		this.width;
		this.height;

		if( !this.init() ) return false;
		this.setup();
		this.loop = setInterval( this.drawLoop.bind(this), 1000/120 );

	}

	App.prototype.init = function()
	{
		this.wrap = document.querySelector("#wrap");
		this.wrap.innerHTML = "";

		this.width = window.innerWidth;
		this.height = window.innerHeight;

		if( !Canvas.create( this.width, this.height ) )
		{
			return false;
		}
		this.eventsListener();
		return true;
	}

	App.prototype.setup = function()
	{
		Canvas.setBackground('images/background.jpg');
		this.Player = new Player("Kuba");
		Grounds.addGrass("straight", 0, this.height - 64);
		Grounds.addGrass("straight", 64, this.height - 64);
		Grounds.addGrass("straight", 64*2, this.height - 64);
		Grounds.addGrass("straight", 64*3, this.height - 64);
		Grounds.addGrass("straight", 64*4, this.height - 64);
		Grounds.addGrass("straight", 64*5, this.height - 64);
		Grounds.addGrass("straight", 64*6, this.height - 64);
		Grounds.addGrass("straight", 64*7, this.height - 64);
		Grounds.addGrass("straight", 64*8, this.height - 64);
		Grounds.addGrass("straight", 64*9, this.height - 64);

		console.log(Grounds.list);
	};

	App.prototype.drawLoop = function()
	{
		if( Canvas.isClosed() ) clearInterval(this.loop);
		if( Canvas.isPaused() ) return;
		Canvas.ctx.clearRect(0,0,this.width, this.height);
		Canvas.renderBackground();

		Canvas.ctx.font = "30px Arial";
		Canvas.ctx.fillText(Clock.today(), 10, this.height - 30)

		this.Player.render();
		Grounds.renderAll();
		Canvas.ctx.fillText( Keyboard.getPressedKey(), 10, 20);

		for(var c = this.height; c >= 0; c-=64)
		{
			Canvas.ctx.beginPath();
			Canvas.ctx.moveTo(0, c);
			Canvas.ctx.lineTo(this.width, c);
			Canvas.ctx.stroke();
		}

		for(var r = 0; r <= this.width; r+=64)
		{
			Canvas.ctx.beginPath();
			Canvas.ctx.moveTo(r, 0);
			Canvas.ctx.lineTo(r, this.height);
			Canvas.ctx.stroke();
		}
	};

	App.prototype.eventsListener = function()
	{
		document.addEventListener("keydown", Keyboard.keydownEvent.bind(Keyboard));
		document.addEventListener("keyup", Keyboard.keyupEvent.bind(Keyboard));
	};

	var app = new App();

})();