import { Game } from './models/Games.js';
import { Random } from 'meteor/random';
import Hashids from 'hashids';

Meteor.methods({
    "createGame": function(gameName) {
        var adminID = Random.secret();
        var hashids = new Hashids('', 0, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        var gameID = hashids.encode(Math.floor(100000 + Random.fraction() * 900000));
        var game = Game.insert({
            name: gameName,
            gameID: gameID,
            inProgress: true,
            adminID: adminID,
            chatID: Random.secret(),
            participants: [{
                id: Random.id(),
                name: "player0",
                isAdmin: true,
            }]
        });
        return { "admin": adminID, "gameID": gameID };
    }
});
