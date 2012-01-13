var SchemaType = require('./SchemaType');

var Place = new SchemaType({
    address: 'http://schema.org/PostalAddress',
    aggregateRating: 'http://schema.org/AggregateRating',
	containedIn: 'http://schema.org/Place',
	faxNumber: {format: 'text', type: 'string'},
	geo: [
		'http://schema.org/GeoCoordinates',
		'http://schema.org/GeoShape'
	],
	interactionCount: {format: 'text', type: 'string'},
	maps: {format: 'url', type: 'string'},
	photos: [
		'http://schema.org/Photograph',
		'http://schema.org/ImageObject'
	],
	reviews: 'http://schema.org/Review',
	telephone:{format: 'text', type: 'string'}
});

var AdministrativeArea = new SchemaType({});

//strange same as place
var Country = new SchemaType({
    address: 'http://schema.org/PostalAddress',
	aggregateRating: 'http://schema.org/AggregateRating',
	containedIn: 'http://schema.org/Place',
	events: 'http://schema.org/Event',
	faxNumber: {format: 'text', type: 'string'},
	geo: [
		'http://schema.org/GeoCoordinates',
		'http://schema.org/GeoShape'
	],
	interactionCount: {format: 'text', type: 'string'},
	maps: {format: 'url', type: 'string'},
	photos: [
		'http://schema.org/Photograph',
		'http://schema.org/ImageObject'
	],
	reviews: 'http://schema.org/Review',
	telephone:{format: 'text', type: 'string'}
});

AdministrativeArea.addSubType('Country', Country);

Place.addSubType('AdministrativeArea', AdministrativeArea);

module.exports = Place;