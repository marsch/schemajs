var SchemaType = require('./SchemaType');

var Product = new SchemaType({
    aggregateRating: 'http://schema.org/AggregateRating',
    brand: 'http://schema.org/Organization',
	manufacturer: 'http://schema.org/Organization',
	model: {format: 'text', type: 'string'},
	offers: 'http://schema.org/Offer',
	productID: {format: 'text', type: 'string'},
	reviews: 'http://schema.org/Review'
});

module.exports = Product;