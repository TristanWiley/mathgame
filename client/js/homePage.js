import { Game } from '../../lib/models/Games.js';

Template.homePage.onRendered(function() {
    // console.log(shortid.generate());
    var wHeight = window.innerHeight;
    $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    jQuery(window).resize(function() {
        wHeight = window.innerHeight;
        $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    });
});

Template.homePage.events({
    'click #join-button': function() {
        $("div.mk-fullscreen-search-overlay").addClass("mk-fullscreen-search-overlay-show");
    },
    'click a.mk-fullscreen-close': function() {
        $("div.mk-fullscreen-search-overlay").removeClass("mk-fullscreen-search-overlay-show");
    },
    'keydown #mk-search-overlay': function(e) {
        if (e.keyCode == 27) {
            $("div.mk-fullscreen-search-overlay").removeClass("mk-fullscreen-search-overlay-show");
        }
    },
    'keydown #join-button': function(e) {
        if (e.keyCode == 27) {
            $("div.mk-fullscreen-search-overlay").removeClass("mk-fullscreen-search-overlay-show");
        }
    },
    'submit #mk-fullscreen-searchform': function(e) {
        e.preventDefault();
        var gameID = $('#mk-fullscreen-search-input').val();
        Meteor.call('createGame', gameID, function(error, result) {
            Session.setPersistent("playerID", result.playerID)
            Session.setPersistent("isAdmin", result.playerID)
            FlowRouter.go('/game/' + result.gameID);
        });
    },
    'submit #gameForm': function(e) {
        e.preventDefault();
        var gameID = $('#input-7').val();
        if (Game.findOne({ gameID: gameID })) {
            Session.clear("playerID");
            FlowRouter.go('/game/' + gameID);
        }
    }
});
