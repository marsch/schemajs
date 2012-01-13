var SchemaType = require('./SchemaType');
/*
ROOT TYPE
*/
var Thing = new SchemaType({
    description: { format:'text', type: 'string' },
	image: {format: 'url', type: 'string' },
	name: {format: 'text', type: 'string' },
	url: {format: 'url', type: 'string' }
});

module.exports = Thing;