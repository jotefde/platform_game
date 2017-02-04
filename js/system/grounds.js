/*var Grounds = (function()
{
	this.count = 0
	this.list = [];

	this.addGrass = function(type, x, y, width, height)
	{
		this.list.push(new grassGround(type, x, y, [width, height]));
		this.count++;
	};

	this.renderAll = function()
	{
		for( var i = 0; i < this.count; i++)
		{
			console.log(this.list[i]);
		}
	};

	this.getCount = function()
	{
		return this.count;
	};

	return {
		count: this.getCount,
		addGrass: this.addGrass,
		renderAll: this.renderAll,
		list: this.list
	};

})();*/

var Grounds = 
{
	count: 0,
	list: [],

	addGrass: function(type, x, y, width, height)
	{
		this.list.push(new grassGround(type, x, y, [width, height]));
		this.count++;
	},

	renderAll: function()
	{
		for( var i = 0; i < this.count; i++)
		{
			this.list[i].render();
		}
	},

	getCount: function()
	{
		return this.count;
	}
};