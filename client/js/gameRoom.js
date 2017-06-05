import { Game } from '../../lib/models/Games.js';

Template.gameRoom.events({
    'keyup #answerinput': function(e) {
        katex.render(e.currentTarget.value, document.getElementById("mathhere"));
    },
    'click #checkAnswer': function(e) {
        Meteor.call("checkAnswer", Session.get("playerID"), FlowRouter.getParam("gameID"), Session.get("questionID"), $('#answerinput').val())
    },
    'click .question': function(e) {
        Session.setPersistent("questionID", e.currentTarget.id)
    },
    'click #joinGame': function() {
        Meteor.call('joinGame', FlowRouter.getParam("gameID"), $('#joinName').val(), function(error, result) {
            Session.setPersistent("playerID", result)
        });
    },
    'click #startGame': function() {
        Meteor.call("startGame", FlowRouter.getParam("gameID"));
    }
});

Template.gameRoom.helpers({
    currentGame: function() {
        var gameID = FlowRouter.getParam("gameID");
        var game = Game.findOne({ gameID: gameID });
        return game;
    },
    isPlayer: function() {
        return Session.get("playerID");
    }
});
