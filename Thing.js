var SchemaType = require('./SchemaType'),
    CreativeWork = require('./CreativeWork'),
    Event = require('./Event'),
    Intangible = require('./Intangible'),
    Organization = require('./Organization'),
    Person = require('./Person'),
    Place = require('./Place'),
    Product = require('./Product');
/*
ROOT TYPE
*/ 
var Thing = new SchemaType({
    description: { format:'text', type: 'string' },
	image: {format: 'url', type: 'string' },
	name: {format: 'text', type: 'string' },
	url: {format: 'url', type: 'string' }
});

Thing.addSubType("CreativeWork", CreativeWork);
Thing.addSubType("Event", Event);
Thing.addSubType("Intangible", Intangible);
Thing.addSubType("Organization", Organization);
Thing.addSubType("Person", Person);
Thing.addSubType("Place", Place);
Thing.addSubType("Product", Product);

module.exports = Thing;