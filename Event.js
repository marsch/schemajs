var SchemaType = require('./SchemaType');

var Event = new SchemaType({
    attendees: [
    	'http://schema.org/Person',
		'http://schema.org/Organization'
	],
	duration: {format: 'date-time', type: 'date'},
	endDate: {format: 'date', type: 'date'},
	location: [
		'http://schema.org/Place',
		'http://schema.org/PostalAddress'
	],
	offers: 'http://schema.org/Offer',
	performers: [
		'http://schema.org/Person',
		'http://schema.org/Organization'
	],
	startDate: {format: 'date', type: 'date'},
	subEvents: 'http://schema.org/Event',
	superEvent: 'http://schema.org/Event'
});


var UserInteraction = new SchemaType({});

var UserBlocks = new SchemaType({});
var UserCheckins = new SchemaType({});
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
var UserDownloads = new SchemaType({});
var UserLikes = new SchemaType({});
var UserPageVisits = new SchemaType({});
var UserPlays = new SchemaType({});
var UserPlusOnes = new SchemaType({});
var UserTweets = new SchemaType({});

UserInteraction.addSubType('UserBlocks', UserBlocks);
UserInteraction.addSubType('UserCheckins', UserCheckins);
UserInteraction.addSubType('UserComments', UserComments);
UserInteraction.addSubType('UserDownloads', UserDownloads);
UserInteraction.addSubType('UserLikes', UserLikes);
UserInteraction.addSubType('UserPageVisits', UserPageVisits);
UserInteraction.addSubType('UserPlays', UserPlays);
UserInteraction.addSubType('UserPlusOnes', UserPlusOnes);
UserInteraction.addSubType('UserTweets', UserTweets);

Event.addSubType('UserInteraction', UserInteraction);


module.exports = Event;