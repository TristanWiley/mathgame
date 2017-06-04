import { Games } from '../../lib/models/Games.js';
// import tex2svg from 'tex-equation-to-svg';

Template.gameRoom.onRendered(function() {
    // Meteor.call("checkAnswer", "e^(1 + 4 (2 + 4 x + 6 x^2 + 3 x^3 + 7 x^4))", "4*(28*x^3+9*x^2+12*x+4)*e^(28*x^4+12*x^3+24*x^2+16*x+9)");
    // (7+4x^2)sin(pi*x)
});

Template.gameRoom.events({
    'keyup #answerinput': function(e) {
        katex.render(e.currentTarget.value, document.getElementById("mathhere"));
    },
    'click #checkAnswer': function(e) {
        Meteor.call("checkAnswer", Session.get("playerID"), FlowRouter.getParam("gameID"), Session.get("questionID"), $('#answerinput').val())
    },
    'click .question': function(e) {
        Session.setPersistent("questionID", e.currentTarget.id)
    }
});

Template.gameRoom.helpers({
    currentGame: function() {
        var gameID = FlowRouter.getParam("gameID");
        var game = Games.findOne({ gameID: gameID });
        return game;
    }
});
