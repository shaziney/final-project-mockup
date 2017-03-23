import { Template } from 'meteor/templating';
import { Partners } from '../../api/partners/partners.js';

Template.Language_Partners.helpers({

  /**
   * @returns {*} All of the Partners documents.
   */

  partnersList() {
    return Partners.find();
  },
});
