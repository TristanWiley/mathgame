FlowRouter.route('/', {
    action: function() {
        BlazeLayout.setRoot('body');
        BlazeLayout.render("homePage");
    }
});

FlowRouter.route('/create', {
    action: function() {
        BlazeLayout.setRoot('body');
        BlazeLayout.render("createGame");
    }
});
