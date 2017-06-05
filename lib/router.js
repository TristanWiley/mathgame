import { Game } from '../lib/models/Games.js';

FlowRouter.route('/', {
    action: function() {
        BlazeLayout.setRoot('body');
        BlazeLayout.render("homePage");
    }
});

FlowRouter.route('/game/:gameID', {
    action: function(params) {
        if (!Game.findOne({ gameID: params.gameID })) {
            FlowRouter.go("/");
        } else {
            if (!Session.get("isAdmin") == Session.get("playerID")) {
                Session.unset("playerID");
            }
            BlazeLayout.setRoot('body');
            BlazeLayout.render("gameRoom");
        }
    }
});
