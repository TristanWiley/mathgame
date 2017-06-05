FlowRouter.route('/', {
    action: function() {
        BlazeLayout.setRoot('body');
        BlazeLayout.render("homePage");
    }
});

FlowRouter.route('/game/:gameID', {
    action: function() {
        if (!Session.get("isAdmin") == Session.get("playerID")) {
            Session.unset("playerID");
        }
        BlazeLayout.setRoot('body');
        BlazeLayout.render("gameRoom");
    }
});
