import { Template } from 'meteor/templating';
import { Partners } from '../../api/partners/partners.js';

Template.Language_Partners.helpers({

  /**
   * @returns {*} All of the Markets documents.
   */

  marketsList() {
    return Markets.find();
  },
});
