import {Game} from './models/Games.js';
import { Random } from 'meteor/random';

Meteor.methods({
    "createGame": function(gameName) {
        var adminID = Random.secret();
        var gameID = Game.insert({
            name: gameName,
            inProgress: true,
            isFinished: false,
            winner: {},
            adminID: adminID,
            chatID: Random.secret()
        });
        return adminID;
    }
});