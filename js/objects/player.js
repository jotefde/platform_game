function Player(_name)
{
	this.name = _name;
	this.width = 64;
	this.height = 64;
	this.position = {x: Canvas.width/2, y: Canvas.height/2};
	this.speed = 5;
	this.gravity = 1;
	this.jumpLenght = 0;
	this.inAir = false;
	this.direction - Direction.LEFT;
	this.sprite = Sprites_img.Player;

	this.render = function()
	{
		this.prepareMove();
		Canvas.ctx.drawImage(this.sprite, this.position.x, this.position.y, this.width, this.height);
	};

	this.prepareMove = function()
	{

		if( Keyboard.isJump() )
		{
			if( this.jumpLenght == 0 && !this.inAir ) this.jumpLenght = JUMP_HEIGHT / this.gravity;
		}

		if( Keyboard.isLeft() )
		{
			this.position.x -= 1*this.speed;
			this.changeDirection(Direction.LEFT);
		}

		else if( Keyboard.isRight() )
		{
			this.position.x += 1*this.speed;
			this.changeDirection(Direction.RIGHT);
		}
	};

	this.changeDirection = function(dir)
	{
		this.direction = dir;
	};
}