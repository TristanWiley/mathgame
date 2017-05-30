import { Template } from 'meteor/templating';
import shortid from 'shortid36';

import './main.html';

Template.homePage.onCreated(function() {
    console.log(shortid.generate());
});
