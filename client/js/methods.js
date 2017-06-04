Template.registerHelper("isSolved", function(param1, options) {
    return Meteor.apply('isNotSolved', [param1, FlowRouter.getParam("gameID"), Session.get("playerID")], { returnStubValue: true });
});
