var SchemaType = require('./SchemaType');

/*
PERSON
*/
var Person = new SchemaType({
    additionalName: { format: 'text', type: 'string' },
	address: 'http://schema.org/PostalAddress',
	affiliation: 'http://schema.org/Organization',
	alumniOf: 'http://schema.org/EducationalOrganization',
	awards: { format: 'text', type: 'string' },
	birthDate: {format: 'date', type: 'date' },
	children: 'http://schema.org/Person',
	colleagues: 'http://schema.org/Person',
	contactPoints: 'http://schema.org/ContactPoint',
	deathDate: {format: 'date', type: 'date' },
	email: {format: 'email', type: 'string' },
	familyName: {format: 'text', type: 'string' },
	faxNumber: {format: 'text', type: 'string' },
	follows:  'http://schema.org/Person',
	gender: {format: 'text', type: 'string' },
	givenName: {format: 'text', type: 'string' },
	homeLocation: {format: 'text', type: 'string' },
	honorificPrefix: {format: 'text', type: 'string' },
	honorificSuffix: {format: 'text', type: 'string' },
	interactionCount: {format: 'text', type: 'string' },
	jobTitle: {format: 'text', type: 'string' },
	knows: 'http://schema.org/Person',
	memberOf: 'http://schema.org/Organization',
	nationality: 'http://schema.org/Country',
	parents: 'http://schema.org/Person',
	performerIn: 'http://schema.org/Event',
	relatedTo: 'http://schema.org/Person',
	siblings: 'http://schema.org/Person',
	spouse: 'http://schema.org/Person',
	telephone: {format: 'text', type: 'string'},
	workLocation: [
		'http://schema.org/Place',
		'http://schema.org/ContactPoint'
	],
	worksFor: 'http://schema.org/Organization'
});

module.exports = Person;