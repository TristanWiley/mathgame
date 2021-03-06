import {Class} from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

export const Games = new Mongo.Collection('games');
export const Game = Class.create({
    name: 'Game',
    collection: Games,
    fields: {
        name: String,
        gameID: String,
        inProgress: Boolean,
        isFinished: Boolean,
        winner: Object,
        adminID: String,
        chatID: String,
        problems: [Object],
        participants: [Object]
    }
})
