function grassGround(_type, _x, _y, _size ) {
	this.position = {x: _x, y: _y};
	this.width = (_size) ? _size[0] : 64;
	this.height = (_size) ? _size[1] : 64;
	this.sprite = new Image(this.width, this.height);
		this.sprite.src = 'images/grassGround/'+_type+'.png';

	this.render = function()
	{
		Canvas.ctx.drawImage(this.sprite, this.position.x, this.position.y, this.width, this.height);
	};
}