var Clock = (function()
{
	this.sessionStarted = new Date().getTime();
	this.uptime = 0;

	this.Uptime = function()
	{
		this.uptime = new Date().getTime();
	}

	this.getSeconds = function()
	{
		return new Date().getSeconds();

	};

	this.getMinutes = function()
	{
		return new Date().getMinutes();
	};

	this.getHour = function()
	{
		return new Date().getHours();
	};

	this.getDay = function()
	{
		return new Date().getDay();
	};

	this.getMonth = function()
	{
		return new Date().getMonth();
	};

	this.getYear= function()
	{
		return new Date().getFullYear();
	};

	this.today = function()
	{
		var _today = new Date();
		var hour = (_today.getHours() < 10) ? "0"+_today.getHours() : _today.getHours();
		var minutes = (_today.getMinutes() < 10) ? "0"+_today.getMinutes() : _today.getMinutes();
		var day = (_today.getDay() < 10) ? "0"+_today.getDay() : _today.getDay();
		var month = (_today.getMonth() < 10) ? "0"+_today.getMonth() : _today.getMonth();

		return hour + ":" + minutes + ", " + day + "/" + month + "/" + _today.getFullYear();
	};

	var _Stoper = function()
	{
		this.startT;
		this.stopT;

		this.start = function()
		{
			this.startT = new Date().getTime();
		};

		this.stop = function()
		{
			if( !this.stopT ) this.stopT = new Date().getTime();
			return this.stopT - this.startT;
		};

		this.result = function()
		{
			if( !this.stopT )
			{
				var indirect = new Date().getTime();
				return indirect - this.startT;
			}
			return this.stopT - this.startT;
		};
	}

	this.getUptime = function()
	{
		return this.uptime;
	};

	return {
		Uptime: this.Uptime,
		getUptime: this.getUptime,
		Stoper: _Stoper,
		hour: this.getHours,
		minutes: this.getMinutes,
		day: this.getDay,
		month: this.getMonth,
		year: this.getYear,
		today: this.today
	};

})();