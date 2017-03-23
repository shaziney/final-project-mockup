import { Partners } from '../../api/partners/partners.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Partners', function publishPartnersData() {
  return Partners.find();
});
