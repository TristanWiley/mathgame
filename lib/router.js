import { Game } from '../lib/models/Games.js';

FlowRouter.route('/', {
    action: function() {
        BlazeLayout.setRoot('body');
        BlazeLayout.render("homePage");
    }
});

FlowRouter.route('/game/:gameID', {
    action: function(params) {
        if (!(Session.get("isAdmin") == Session.get("playerID"))) {
            console.log("TEST");
            Session.clear("playerID");
        }
        BlazeLayout.setRoot('body');
        BlazeLayout.render("gameRoom");
    }
});
