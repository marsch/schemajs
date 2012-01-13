var SchemaType = require('./SchemaType');

var Intangible = new SchemaType({
    
});

var Enumeration = new SchemaType({});

var BookFormatType = new SchemaType({});
var EBook = new SchemaType({});
var Hardcover = new SchemaType({});
var Paperback = new SchemaType({});
BookFormatType.addSubType('EBook', EBook);
BookFormatType.addSubType('Hardcover', Hardcover);
BookFormatType.addSubType('Paperback', Paperback);

var ItemAvailability = new SchemaType({});
var Discontinued = new SchemaType({});
var InStock = new SchemaType(
var OfferItemCondition = new SchemaType({});



var JobPosting = new SchemaType({
    baseSalary: {format: 'number', type:'number'},
    benefits: {format: 'text', type: 'string'},
    datePosted: {format: 'date', type: 'date'},
    educationRequirements:{format: 'text', type:'string'},
    experienceRequirements:{format: 'text', type: 'string'},
    hiringOrganization: 'http://schema.org/Organization',
    incentives: {format: 'text', type: 'string'},
    industry: {format: 'text', type: 'string'},
    jobLocation: 'http://schema.org/Place',
    occupationalCategory: {format: 'text', type: 'string'},
    quialifications: {format: 'text', type: 'string'},
    responsibilities: {format: 'text', type: 'string'},
    salaryCurrency: {format: 'text', type: 'string'},
    skills: {format: 'text', type: 'string'},
    specialCommitments: {format: 'text', type: 'string'},
    title: {format: 'text', type: 'string'},
    workHours: {format: 'text', type: 'string'}
});
var Language = new SchemaType({});

var Offer = new SchemaType({
    aggregateRating: 'http://schema.org/AggregateRating',
	availability: 'http://schema.org/ItemAvailability',
	itemCondition: 'http://schema.org/OfferItemCondition',
	itemOffered: 'http://schema.org/Product',
	price: {format: 'number', type: 'number'},
	priceCurrency: {format: 'text', type: 'string'},
	priceValidUntil: {format: 'date', type: 'date'},
	reviews: 'http://schema.org/Review',
	seller: 'http://schema.org/Organization'
});
var Quantity = new SchemaType({});

var Rating = new SchemaType({
    bestRating: {format: 'number', type: 'number'},
	ratingValue: {format: 'text', type: 'string'},
	worstRating: {format: 'number', type: 'number'}
});



var StructuredValue = new SchemaType({});
var ContactPoint = new SchemaType({
    contactType: {format: 'text', type: 'string'},
    email: {format: 'email', type: 'string'},
	faxNumber: {format: 'text', type: 'string'},
	telephone: {format: 'text', type: 'string'}
});
var GeoCoordinates = new SchemaType({
	elevation: {format: 'text', type: 'string'},
	latitude: {format: 'text', type: 'string'},
	longitude: {format: 'text', type: 'string'}
});
var GeoShape = new SchemaType({
	box: {format: 'text', type: 'string'},
	circle:{format: 'text', type: 'string'},
	elevation: {format: 'text', type: 'string'},
	line: {format: 'text', type: 'string'},
	polygon: {format: 'text', type: 'string'}
});


Intangible.addSubType('Enumeration', Enumeration);
Intangible.addSubType('JobPosting', JobPosting);
Intangible.addSubType('Language', Language);
Intangible.addSubType('Offer', Offer);
Intangible.addSubType('Rating', Rating);
Intangible.addSubType('StructuredValue', StructuredValue);

module.exports = Intangible;