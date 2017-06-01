FlowRouter.route('/', {
    action: function() {
        BlazeLayout.setRoot('body');
        BlazeLayout.render("homePage");
    }
});

FlowRouter.route('/game/:gameID', {
    action: function() {
        BlazeLayout.setRoot('body');
        BlazeLayout.render("gameRoom");
    }
});
