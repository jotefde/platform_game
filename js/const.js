var Direction = {
	UP: 0,
	DOWN: 1,
	RIGHT: 2,
	LEFT: 3
};

var JUMP_HEIGHT = 100;

var Sprites_img = {};
	Sprites_img.Player = new Image(64,64);
		Sprites_img.Player.src = 'images/player.png';
	Sprites_img.Grass_ground = new Image(250,140);
		Sprites_img.Grass_ground.src = 'images/grass_ground.png';