
assert2(cr, "cr namespace not created");
assert2(cr.plugins, "cr.plugins not created");

// Create plugin class
cr.plugins.Clock = function(runtime)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	this.runtime = runtime;
};

// Class representing an object type
cr.plugins.Clock.prototype.Type = function(plugin)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	assert2(plugin instanceof cr.plugins.Clock, "Creating type with wrong plugin");
	
	this.plugin = plugin;
	this.runtime = plugin.runtime;
};

cr.plugins.Clock.prototype.Type.prototype.onCreate = function()
{
};

// Class representing an object instance
cr.plugins.Clock.prototype.Instance = function(type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	this.type = type;
	this.runtime = type.runtime;
	
};

cr.plugins.Clock.prototype.Instance.prototype.onCreate = function()
{
	
};

cr.plugins.Clock.prototype.Instance.prototype.draw = function(ctx)
{
};

//////////////////////////////////////
// Conditions
cr.plugins.Clock.prototype.cnds = {};

(function()
{
	// Get prototype for the conditions object that stores condition methods for an instance
	var cnds = cr.plugins.Clock.prototype.cnds;
	
}());

//////////////////////////////////////
// Actions
cr.plugins.Clock.prototype.acts = {};

(function()
{
	// Get prototype for the actions object that stores action methods for an instance
	var acts = cr.plugins.Clock.prototype.acts;
	
	//
}());

//////////////////////////////////////
// Expressions
cr.plugins.Clock.prototype.exps = {};

(function()
{
	// Get prototype for the expressions object that stores expression methods for an instance
	var exps = cr.plugins.Clock.prototype.exps;
	var currentDate = new Date()
	
	exps["milsecond"] = function (ret)
	{
		ret.set_float(new Date().getMilliseconds());
	};
	
	exps["second"] = function (ret)
	{
		ret.set_float(new Date().getSeconds());
	};
	
	exps["minute"] = function (ret)
	{
		ret.set_float(new Date().getMinutes());
	};
	
	exps["hour"] = function (ret)
	{
		ret.set_float(new Date().getHours());
	};	
	
	exps["day"] = function (ret)
	{
		ret.set_float(new Date().getDate());
	};
	
	exps["week"] = function (ret)
	{
		ret.set_float(new Date().getDay());
	};
	
	exps["month"] = function (ret)
	{
		ret.set_float(new Date().getMonth()+1);
	};
	
	exps["year"] = function (ret)
	{
		ret.set_float(new Date().getFullYear());
	};
}());
