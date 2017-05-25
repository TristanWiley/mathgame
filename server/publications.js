import Games from '../lib/models/Games.js';

Meteor.publish("games", function(){
    return Games.find();
})