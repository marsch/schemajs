var SchemaType = require('./SchemaType');

var CreativeWork = new SchemaType({
    about: 'http://schema.org/Thing',
    accountablePerson: 'http://schema.org/Person',
	aggregateRating: 'http://schema.org/AggregateRating',
	alternativeHeadline: {format: 'text', type: 'string'},
	associatedMedia: 'http://schema.org/MediaObject',
	audio: 'http://schema.org/AudioObject',
	author: [
		'http://schema.org/Person',
		'http://schema.org/Organization'
	],
	awards: {format: 'text', type: 'string'},
	comment: 'http://schema.org/UserComments',
	contentLocation: 'http://schema.org/Place',
	contentRating: {format: 'text', type: 'string'},
	contributor: [
		'http://schema.org/Person',
		'http://schema.org/Organization'
	],
	copyrightHolder: [
		'http://schema.org/Person',
		'http://schema.org/Organization'
	],
	copyrightYear: {format: 'number', type: 'number'},
	creator: [
		'http://schema.org/Person',
		'http://schema.org/Organization'
	],
	dateCreated: {format: 'date', type: 'date'},
	dateModified: {format: 'date', type: 'date'},
	datePublished: {format: 'date', type: 'date'},
	discussionUrl: {format: 'url', type: 'string'},
	editor: 'http://schema.org/Person',
	encodings: 'http://schema.org/MediaObject',
	genre: {format: 'text', type: 'string'},
	headline: {format: 'text', type: 'string'},
	inLanguage: {format: 'text', type: 'string'},
	interactionCount: {format: 'text', type: 'string'},
	isFamilyFriendly: {format: 'boolean', type: 'boolean'},
	keywords: {format: 'text', type: 'string'},
	mentions: 'http://schema.org/Thing',
	offers: 'http://schema.org/Offer',
	provider:[
		'http://schema.org/Person',
		'http://schema.org/Organization'
	],
	publisher: 'http://schema.org/Organization',
	publishingPrinciples: {format: 'url', type: 'string'},
	reviews: 'http://schema.org/Review',
	sourceOrganization: 'http://schema.org/Organization',
	thumbnailUrl: {format: 'url', type: 'string'},
	version: {format: 'number', type: 'number'},
	video: 'http://schema.org/VideoObject'
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
Article.addSubType('NewsArticle', NewsArticle);

var Photograph = new SchemaType({});

var Review = new SchemaType({
    itemReviewed: 'http://schema.org/Thing',
	reviewBody: {format: 'text', type: 'string'},
	reviewRating: 'http://schema.org/Rating'
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
	height: 'http://schema.org/Distance'
});

var AudioObject = new SchemaType({
    transcript: {format: 'text', type: 'string'}
});
var ImageObject = new SchemaType({
    caption: {format: 'text', type: 'string'},
	exifData: {format: 'text', type: 'string'},
	representativeOfPage: {format: 'boolean', type: 'boolean'},
	thumbnail: 'http://schema.org/ImageObject'
});
var VideoObject = new SchemaType({
	caption: {format: 'text', type: 'string'},
	productionCompany: 'http://schema.org/Organization',
	thumbnail: 'http://schema.org/ImageObject',
	transcript: {format: 'text', type: 'string'},
	videoFrameSize: {format: 'text', type: 'string'},
	videoQuality: {format: 'text', type: 'string'}
});
MediaObject.addSubType('AudioObject', AudioObject);
MediaObject.addSubType('ImageObject', ImageObject);
MediaObject.addSubType('VideoObject', VideoObject);


CreativeWork.addSubType('Article', Article);
CreativeWork.addSubType('Photograph', Photograph);
CreativeWork.addSubType('Review', Review);
CreativeWork.addSubType('MediaObject', MediaObject);


module.exports = CreativeWork;