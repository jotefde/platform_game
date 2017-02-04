/*
** Canvas object
*/
var Canvas = (function()
	{
		this.width;
		this.height;
		this.canvas;
		this.ctx;
		this.paused = false;
		this.closed = false;
		this.background;
		this.reservedPixels = {
			x: [],
			y: []
		};

		this.create = function( _width, _height )
		{
			var wrap = document.querySelector("#wrap");
			if( document.querySelector("canvas") )
			{
				console.log("Canvas already exists.");
				return false;
			}
			this.width = _width;
			this.height = _height;
			this.canvas = document.createElement("canvas");
				this.canvas.width = this.width;
				this.canvas.height = this.height;
			if( !this.canvas.getContext )
			{
				wrap.innerHTML = "Your browser does not support canvas.";
				return false;
			}
			this.ctx = this.canvas.getContext("2d");
			wrap.appendChild(this.canvas);
			return true;
		};

		this.getCanvas = function()
		{
			return this.canvas;
		};

		this.getCtx = function()
		{
			return this.ctx;
		};

		this.start = function()
		{
			this.paused = false;
		}

		this.pause = function(time)
		{
			this.paused = true;
			if(typeof time == "number") {
				setTimeout(function(){this.paused = false;}.bind(this), time);
			}
		};

		this.close = function()
		{
			this.closed = true;
		};

		this.isClosed = function()
		{
			return this.closed;
		};

		this.isPaused = function()
		{
			return this.paused;
		};

		this.setBackground = function(link)
		{
			this.background = new Image(this.width, this.height);
				this.background.src = link;
		};

		this.renderBackground = function()
		{
			this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
		};

		this.reservPixels = function(fromX, fromY, toX, toY)
		{
			for(var i = fromX; i <= toX; i++)
				this.reservedPixels.x.push(i);
			for(var j = fromY; j <= toY; j++)
				this.reservedPixels.y.push(j);
		};

		return {
			getCanvas: this.getCanvas,
			ctx: this.getCtx,
			create: this.create,
			pause: this.pause,
			isPaused: this.isPaused,
			close: this.close,
			isClosed: this.isClosed,
			setBackground: this.setBackground,
			renderBackground: this.renderBackground,
			reservPixels: this.reservPixels,
			reservedPixels: this.reservedPixels
		};

	})();