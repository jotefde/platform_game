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
		Grounds.addGrass("straight", 150, 40, 128, 64);
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

	};

	App.prototype.eventsListener = function()
	{
		document.addEventListener("keydown", Keyboard.keydownEvent.bind(Keyboard));
		document.addEventListener("keyup", Keyboard.keyupEvent.bind(Keyboard));
	};

	var app = new App();

})();