var Keyboard = (function()
	{
		this.pressedKey;

		this.keydownEvent = function(e)
		{
			this.setPressedKey(e.key);
		};

		this.keyupEvent = function(e)
		{
			this.setPressedKey(undefined);
		};

		this.getPressedKey = function()
		{
			return this.pressedKey;
		}

		this.setPressedKey = function(key)
		{
			this.pressedKey = key;
		}

		this.isJump = function()
		{
			if( this.pressedKey == ' ' )
				return true;
			return false;
		}

		this.isLeft = function()
		{
			if( this.pressedKey == 'a' || this.pressedKey == 'A' || this.pressedKey == 'ArrowLeft' )
				return true;
			return false;
		}

		this.isRight = function()
		{
			if( this.pressedKey == 'd' || this.pressedKey == 'D' || this.pressedKey == 'ArrowRight' )
				return true;
			return false;
		}

		return {
			setPressedKey: this.setPressedKey,
			getPressedKey: this.getPressedKey,
			keydownEvent: this.keydownEvent,
			keyupEvent: this.keyupEvent,

			isJump: this.isJump,
			isLeft: this.isLeft,
			isRight: this.isRight
		};

	})();