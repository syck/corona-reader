// Declare a collection to hold the count object.
const Counts = new Mongo.Collection('counts');

// Subscribe to the count for the current room.
articles = new Mongo.Collection('articles');
Meteor.subscribe('articles');
console.log(articles);