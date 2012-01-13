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
var InStock = new SchemaType({});
var InStoreOnly = new SchemaType({});
var OnlineOnly = new SchemaType({});
var OutOfStock = new SchemaType({});
var PreOrder = new SchemaType({});
ItemAvailability.addSubType('Discontinued', Discontinued);
ItemAvailability.addSubType('InStock', InStock);
ItemAvailability.addSubType('InStoreOnly', InStoreOnly);
ItemAvailability.addSubType('OnlineOnly', OnlineOnly);
ItemAvailability.addSubType('OutOfStock', OutOfStock);
ItemAvailability.addSubType('PreOrder', PreOrder);

var OfferItemCondition = new SchemaType({});
var DamagedCondition = new SchemaType({});
var NewCondition = new SchemaType({});
var RefurbishedCondition = new SchemaType({});
var UsedCondition = new SchemaType({});
OfferItemCondition.addSubType('DamagedCondition', DamagedCondition);
OfferItemCondition.addSubType('NewCondition', NewCondition);
OfferItemCondition.addSubType('RefurbishedCondition', RefurbishedCondition);
OfferItemCondition.addSubType('UsedCondition', UsedCondition);

Enumeration.addSubType('BookFormatType', BookFormatType);
Enumeration.addSubType('ItemAvailability', ItemAvailability);
Enumeration.addSubType('OfferItemCondition', OfferItemCondition);

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
var AggregateOffer = new SchemaType({
    highPrice: {format: 'number', type:'number'},
    lowPrice: {format: 'number', type: 'number'},
    offerCount: {format: 'number', type: 'number'}
});
Offer.addSubType('AggregateOffer', AggregateOffer);

var Quantity = new SchemaType({});
var Distance = new SchemaType({});
var Duration = new SchemaType({});
var Energy = new SchemaType({});
var Mass = new SchemaType({});
Quantity.addSubType('Distance', Distance);
Quantity.addSubType('Duration', Duration);
Quantity.addSubType('Energy', Energy);
Quantity.addSubType('Mass', Mass);

var Rating = new SchemaType({
    bestRating: {format: 'number', type: 'number'},
	ratingValue: {format: 'text', type: 'string'},
	worstRating: {format: 'number', type: 'number'}
});
var AggregateRating = new SchemaType({
    itemReviewed: 'http://schema.org/Thing',
    ratingCount: {format: 'number', type: 'number'},
    reviewCount: {format: 'number', type: 'number'}
});
Rating.addSubType('AggregateRating', AggregateRating);


var StructuredValue = new SchemaType({});
var ContactPoint = new SchemaType({
    contactType: {format: 'text', type: 'string'},
    email: {format: 'email', type: 'string'},
	faxNumber: {format: 'text', type: 'string'},
	telephone: {format: 'text', type: 'string'}
});
var PostalAddress = new SchemaType({
    addressCountry: 'http://schema.org/Country',
    addressLocality: {format: 'text', type: 'string'},
	addressRegion: {format: 'text', type: 'string' },
	postOfficeBoxNumber: {format: 'text', type: 'string' },
	postalCode: {format: 'text', type: 'string' },
	streetAddress: {format: 'text', type: 'string'}
});
ContactPoint.addSubType('PostalAddress', PostalAddress);

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
var NutritionInformation = new SchemaType({
    calories: 'http://schema.org/Energy',
    carbohydrateContent: 'http://schema.org/Mass',
    cholesterolContent: 'http://schema.org/Mass',
    fatContent: 'http://schema.org/Mass',
    fiberContent: 'http://schema.org/Mass',
    proteinContent: 'http://schema.org/Mass',
    saturatedFatContent: 'http://schema.org/Mass',
    servingSize: {format: 'text', type: 'string'},
    sodiumContent: 'http://schema.org/Mass',
    sugarContent: 'http://schema.org/Mass',
    transFatContent: 'http://schema.org/Mass',
    unsaturatedFatContent: 'http://schema.org/Mass'
});
StructuredValue.addSubType('ContactPoint', ContactPoint);
StructuredValue.addSubType('GeoCoordinates', GeoCoordinates);
StructuredValue.addSubType('GeoShape', GeoShape);
StructuredValue.addSubType('NutritionInformation', NutritionInformation);

Intangible.addSubType('Enumeration', Enumeration);
Intangible.addSubType('JobPosting', JobPosting);
Intangible.addSubType('Language', Language);
Intangible.addSubType('Offer', Offer);
Intangible.addSubType('Quantity', Quantity);
Intangible.addSubType('Rating', Rating);
Intangible.addSubType('StructuredValue', StructuredValue);

module.exports = Intangible;