import { Meteor } from "meteor/meteor";
import { onPageLoad } from "meteor/server-render";
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => { });

onPageLoad(sink => {
  sink.renderIntoElementById(
    "server-render-target",
    `Server time: ${new Date}`
  );
});

articles = new Mongo.Collection('articles');

Meteor.publish('articles', function () {
  data = articles.find({ site: '444' });
  return data;
});

