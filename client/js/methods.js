Template.registerHelper("isSolved", function(param1, options) {
    return Meteor.apply('isNotSolved', [param1, FlowRouter.getParam("gameID"), Session.get("playerID")], { returnStubValue: true });
});

Template.registerHelper("isAdmin", function(param1, options) {
    return Meteor.apply('isAdmin', [FlowRouter.getParam("gameID"), Session.get("playerID")], { returnStubValue: true });
});

Template.registerHelper("getPlayerName", function(param1, options) {
    return Meteor.apply('playerName', [FlowRouter.getParam("gameID"), Session.get("playerID")], { returnStubValue: true });
});