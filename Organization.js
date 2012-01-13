var SchemaType = require('./SchemaType');

var Organization = new SchemaType({
    address: 'http://schema.org/PostalAddress',
	aggregateRating: 'http://schema.org/AggregateRating',
	contactPoints: 'http://schema.org/ContactPoint',
	email: {format: 'email', type: 'string' },
	employees: 'http://schema.org/Person',
	events: 'http://schema.org/Event',
	faxNumber: {format: 'text', type: 'string' },
	founders: 'http://schema.org/Person',
	foundingDate: {format: 'date', type: 'date' },
	interactionCount: {format: 'text', type: 'string' },
	location: [
		'http://schema.org/Place',
		'http://schema.org/PostalAddress'
	],
	members: [
		'http://schema.org/Person',
		'http://schema.org/Organization'
	],
	reviews: 'http://schema.org/Review',
	telephone: {format: 'text', type: 'string'}
});


var EducationalOrganization = new SchemaType({
    alumni: 'http://schema.org/Person'
});
var CollegeOrUniversity = new SchemaType({});
var ElementarySchool = new SchemaType({});
var HighSchool = new SchemaType({});
var MiddleSchool = new SchemaType({});
var PreSchool = new SchemaType({});
var School = new SchemaType({});
EducationalOrganization.addSubType('CollegeOrUniversity', CollegeOrUniversity);
EducationalOrganization.addSubType('ElementarySchool', ElementarySchool);
EducationalOrganization.addSubType('HighSchool', HighSchool);
EducationalOrganization.addSubType('MiddleSchool', MiddleSchool);
EducationalOrganization.addSubType('PreSchool', PreSchool);
EducationalOrganization.addSubType('School', School);



Organization.addSubType('EducationalOrganization', EducationalOrganization);

module.exports = Organization;