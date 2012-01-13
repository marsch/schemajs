/**
 * LICENSE
 * =======
 * Because License is not clear today, this code is not available
 * under any license.
 *
 * Copyright (C) Sourcegarden GmbH, 2006-2011
 * Mail: info@sourcegarden.com
 *
 * @author Mario Scheliga <mario@sourcegarden.com>
 */


var EducationalOrganization = new SchemaType({
	alumni: 'http://schema.org/Person'
});

var PostalAddress = new SchemaType({
    addressCountry: 'http://schema.org/Country',
	addressLocality: {format: 'text', type: 'string'},
	addressRegion: {format: 'text', type: 'string' },
	postOfficeBoxNumber: {format: 'text', type: 'string' },
	postalCode: {format: 'text', type: 'string' },
	streetAddress: {format: 'text', type: 'string'}
});


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




var Review = new SchemaType({
	itemReviewed: 'http://schema.org/Thing',
	reviewBody: {format: 'text', type: 'string'},
	reviewRating: 'http://schema.org/Rating'
});

var Photograph = new SchemaType({});
var ImageObject = new SchemaType({
	caption: {format: 'text', type: 'string'},
	exifData: {format: 'text', type: 'string'},
	representativeOfPage: {format: 'boolean', type: 'boolean'},
	thumbnail: 'http://schema.org/ImageObject'
});




var MediaObject = new SchemaType({
	associatedArticle: 'http://schema.org/NewsArticle',
	bitrate: {format: 'text', type: 'string'},
	contentSize: {format: 'text', type: 'string'},
	contentURL: {format: 'url', type: 'string'},
	duration: {format: 'date-time', type: 'date'},
	embedURL: {format: 'url', type: 'string'},
	encodesCreativeWork: 'http://schema.org/CreativeWork',
	encodingFormat: {format: 'text', type: 'string'},
	expires: {format: 'date', type: 'date'},
	height: 'http://schema.org/Distance',
});

var UserComments = new SchemaType({
	commentText: {format: 'text', type: 'string'},
	commentTime: {format: 'date-time', type: 'date'},
	creator: [
		'http://schema.org/Person',
		'http://schema.org/Organization'
	],
	discuss: 'http://schema.org/CreativeWork',
	replyToUrl: {format: 'url', type: 'string'}

});

var AudioObject = new SchemaType({
	transcript: {format: 'text', type: 'string'}
});

var VideoObject = new SchemaType({
	caption: {format: 'text', type: 'string'},
	productionCompany: 'http://schema.org/Organization',
	thumbnail: 'http://schema.org/ImageObject',
	transcript: {format: 'text', type: 'string'},
	videoFrameSize: {format: 'text', type: 'string'},
	videoQuality: {format: 'text', type: 'string'}
});

var Article = new SchemaType({
	articleBody: {format: 'text', type: 'string'},
	articleSection: {format: 'text', type: 'string'},
	wordCount: {format: 'Integer', type: 'number'}
});
var NewsArticle = new SchemaType({
	dateline: {format: 'text', type: 'string'},
	printColumn: {format: 'text', type: 'string'},
	printEdition: {format: 'text', type: 'string'},
	printPage: {format: 'text', type: 'string'},
	printSection: {format: 'text', type: 'string'}
});
var Distance = new SchemaType({});



var ItemAvailability = new SchemaType({});
var OfferItemCondition = new SchemaType({});



Thing.addSubType("CreativeWork", CreativeWork);
Thing.addSubType("Organization", Organization);
Thing.addSubType("Person", Person);
Thing.addSubType("Event", Event);
Thing.addSubType("Place", Place);
Thing.addSubType("Product", Product);

console.log(Thing);