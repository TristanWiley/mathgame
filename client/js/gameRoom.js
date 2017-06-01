import {Games} from '../../lib/models/Games.js'
//Template.gameRoom.onRendered(function() {
//
//});

//Template.gameRoom.events({
//    'click #join-button': function() {
//        $("div.mk-fullscreen-search-overlay").addClass("mk-fullscreen-search-overlay-show");
//    }
//});

Template.gameRoom.helpers({
    currentGame: function(){
        var gameID = FlowRouter.getParam("gameID");
        var game = Games.findOne({name: gameID});
        return game;
    }
});