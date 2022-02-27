function GetPluginSettings()
{
	return {
		"name":			"Clock",
		"id":			"Clock",
		"description":	"Retrieve time values.",
		"author":		"Yarfapet",
		"help url":		"http://www.scirra.com",
		"category":		"Input",
		"type":			"object",			// not in layout
		"rotatable":	false,
		"flags":		pf_singleglobal
	};
};

//////////////////////////////////////////////////////////////
// Conditions

//////////////////////////////////////////////////////////////
// Expressions.
AddExpression(0, ef_return_number, "Miliseconds", "Local Time", "milsecond", "Get Current Miliseconds of the Second.");
AddExpression(1, ef_return_number, "Seconds", "Local Time", "second", "Get Current Second of the Minute.");
AddExpression(2, ef_return_number, "Minutes", "Local Time", "minute", "Get Current Minute of the Hour.");
AddExpression(3, ef_return_number, "Hours", "Local Time", "hour", "Get Current Hour (24 hr) of the Day.");

AddExpression(5, ef_return_number, "Day", "Local Date", "day", "Get Current Day of the Month.");
AddExpression(6, ef_return_number, "Week", "Local Date", "week", "Get Current Day of the Week (0-6).");
AddExpression(7, ef_return_number, "Month", "Local Date", "month", "Get Current Month of the Year.");
AddExpression(8, ef_return_number, "Year", "Local Date", "year", "Get Current Year.");

ACESDone();

// Property grid properties for this plugin
var property_list = [
	];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance, this);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function()
{
}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}
	
// Called by the IDE to draw this instance in the editor
IDEInstance.prototype.Draw = function(renderer)
{
}

// Called by the IDE when the renderer has been released (ie. editor closed)
// All handles to renderer-created resources (fonts, textures etc) must be dropped.
// Don't worry about releasing them - the renderer will free them - just null out references.
IDEInstance.prototype.OnRendererReleased = function()
{
}
